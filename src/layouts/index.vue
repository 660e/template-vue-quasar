<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';
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

const exclude: string[] = [];
const include: string[] = [];
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
