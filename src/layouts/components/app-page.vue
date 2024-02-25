<script lang="ts" setup>
import { routes } from '@/router';
import { RouteRecordRaw } from 'vue-router';

import AppTrigger from '@/layouts/components/app-trigger.vue';

const tweak = (offset: number, height: number) => ({ height: `${height - offset - (36 + 1) * 2}px` });
const exclude: string[] = [];
const include: string[] = filterKeepAlive(routes);

function filterKeepAlive(data: RouteRecordRaw[]) {
  const results: string[] = [];
  data.forEach(d => {
    if (d.meta?.keepAlive) results.push(d.name as string);
    if (d.children?.length) results.push(...filterKeepAlive(d.children));
  });
  return results;
}
</script>

<template>
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
</template>
