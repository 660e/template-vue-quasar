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

const tweak = (offset: number, height: number) => ({ height: `${height - offset - 32 - 1}px` });

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
        <q-btn @click="toggle" icon="menu" dense flat round />
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
      <q-page :style-fn="tweak" class="overflow-y-auto overflow-x-hidden">
        <router-view v-slot="{ Component }">
          <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
            <keep-alive :exclude="exclude" :include="include">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </q-page>
      <div>
        <q-separator />
        <div class="h-8 overflow-hidden flex justify-between items-center px-4">
          <div class="flex space-x-1">
            <template v-for="(route, index) in $route.matched.filter(e => e.name)" :key="index">
              <span v-if="index !== 0">/</span>
              <span>{{ route.meta.title }}</span>
            </template>
          </div>
          <div class="text-gray-400 text-xs">{{ $package.version }}-{{ $q.version }}</div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>
