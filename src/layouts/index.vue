<script lang="ts" setup>
import { ref } from 'vue';
import { routes } from '@/router';
import { RouteRecordRaw } from 'vue-router';

import AppHeader from './components/app-header.vue';
import AppFooter from './components/app-footer.vue';
import AppTabs from './components/app-tabs.vue';

import MenuComponent from './components/menu.vue';

defineOptions({ name: 'app-layout' });

const drawer = ref(true);
const toggle = () => {
  drawer.value = !drawer.value;
  window.dispatchEvent(new Event('resize'));
};

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
    <app-header />
    <q-drawer v-model="drawer" :width="200" bordered>
      <menu-component />
    </q-drawer>
    <q-page-container>
      <app-tabs />
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
      <app-footer />
    </q-page-container>
  </q-layout>
</template>
