<script lang="ts" setup>
import { routes } from '@/router';
import { RouteRecordRaw } from 'vue-router';
import { useLayoutStore } from '@/stores/modules/layout';

import AppHeader from '@/layouts/components/app-header.vue';
import AppFooter from '@/layouts/components/app-footer.vue';
import AppTabs from '@/layouts/components/app-tabs.vue';
import AppTrigger from '@/layouts/components/app-trigger.vue';

import MenuComponent from './components/menu.vue';

defineOptions({ name: 'app-layout' });

const $layoutStore = useLayoutStore();

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
    <q-drawer v-model="$layoutStore.drawer" :width="200" bordered>
      <menu-component />
    </q-drawer>
    <q-page-container>
      <app-tabs />
      <q-page :style-fn="tweak" class="overflow-y-auto overflow-x-hidden relative">
        <app-trigger />
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
