<script lang="ts" setup>
import { useLayoutStore } from '@/stores/modules/layout';

import AppHeader from '@/layouts/components/app-header.vue';
import AppFooter from '@/layouts/components/app-footer.vue';
import AppPage from '@/layouts/components/app-page.vue';
import AppTabs from '@/layouts/components/app-tabs.vue';

import MenuComponent from './components/menu.vue';

defineOptions({ name: 'app-layout' });

const $layoutStore = useLayoutStore();
</script>

<template>
  <q-layout view="hhh lpr fff" class="overflow-hidden">
    <app-header />
    <q-drawer v-model="$layoutStore.drawer" :width="200" bordered>
      <menu-component />
    </q-drawer>
    <q-page-container>
      <app-tabs />
      <app-page />
      <app-footer />
    </q-page-container>
  </q-layout>
</template>
