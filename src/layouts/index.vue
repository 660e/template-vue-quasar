<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute, type RouteRecordRaw } from 'vue-router';
import { useQuasar } from 'quasar';
import { routes } from '@/router';
import $package from '../../package.json';

import MenuComponent from './components/menu.vue';

defineOptions({ name: 'app-layout' });

const $route = useRoute();
console.log($route.matched);

const $q = useQuasar();
console.log($q.version);

const drawer = ref(true);
const toggle = () => {
  drawer.value = !drawer.value;
  window.dispatchEvent(new Event('resize'));
};

const tweak = (offset: number, height: number) => ({ height: `${height - offset}px` });

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
    <q-ajax-bar />
    <q-header>
      <q-toolbar>
        <q-btn @click="toggle" icon="menu" dense flat round />
        <q-toolbar-title>{{ $package.productName }}</q-toolbar-title>
        <q-btn :icon="$q.dark.isActive ? 'brightness_5' : 'brightness_4'" @click="$q.dark.toggle()" dense flat round />
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
    </q-page-container>
  </q-layout>
</template>
