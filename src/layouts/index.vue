<script lang="ts" setup>
import { ref } from 'vue';
import { routes } from '@/router';
import { RouteRecordRaw } from 'vue-router';
import $package from '../../package.json';

import MenuComponent from './components/menu.vue';

defineOptions({ name: 'app-layout' });

const drawer = ref(true);
const toggle = () => {
  drawer.value = !drawer.value;
  window.dispatchEvent(new Event('resize'));
};

const tab = ref('mails');

const tweak = (offset: number, height: number) => ({ height: `${height - offset - (36 + 1) * 2}px` });

const filterKeepAlive = (data: RouteRecordRaw[]) => {
  const results: string[] = [];
  data.forEach(d => {
    if (d.meta?.keepAlive) results.push(d.name as string);
    if (d.children?.length) results.push(...filterKeepAlive(d.children));
  });
  return results;
};
const exclude: string[] = [];
const include: string[] = filterKeepAlive(routes);
</script>

<template>
  <q-layout view="hhh lpr fff" class="overflow-hidden">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>{{ $package.productName }}</q-toolbar-title>
        <q-btn :icon="$q.dark.isActive ? 'brightness_5' : 'brightness_4'" @click="$q.dark.toggle()" dense flat round>
          <q-tooltip>{{ $q.dark.isActive ? 'Light' : 'Dark' }}</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer" :width="200" bordered>
      <menu-component />
    </q-drawer>
    <q-page-container>
      <div>
        <q-tabs v-model="tab" align="left" active-color="primary" indicator-color="primary" dense>
          <q-tab name="mails" label="Mails" />
          <q-tab name="alarms" label="Alarms" />
          <q-tab name="movies" label="Movies" />
        </q-tabs>
      </div>
      <q-separator />
      <q-page :style-fn="tweak" class="overflow-y-auto overflow-x-hidden relative">
        <div
          @click="toggle"
          class="absolute top-1/2 left-0 -translate-y-1/2 h-20 w-4 flex flex-col justify-center items-center cursor-pointer group bg-red-100"
        >
          <div :class="[`group-hover:${drawer ? '' : '-'}rotate-12`]" class="h-3 w-1 rounded-full bg-gray-500 translate-y-0.5 duration-300"></div>
          <div :class="[`group-hover:${drawer ? '-' : ''}rotate-12`]" class="h-3 w-1 rounded-full bg-gray-500 -translate-y-0.5 duration-300"></div>
        </div>
        <router-view v-slot="{ Component }">
          <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
            <keep-alive :exclude="exclude" :include="include">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </q-page>
      <q-separator />
      <div class="px-4 h-9 flex justify-between items-center">
        <div class="flex space-x-2">
          <template v-for="(route, index) in $route.matched.filter(e => e.name)" :key="index">
            <span v-if="index !== 0">/</span>
            <span>{{ route.meta.title }}</span>
          </template>
        </div>
        <div class="text-gray-400 text-xs">{{ $package.version }}-{{ $q.version }}</div>
      </div>
    </q-page-container>
  </q-layout>
</template>
