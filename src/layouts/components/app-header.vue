<script lang="ts" setup>
import $package from '../../../package.json';

import AppAppearance from '@/layouts/components/app-appearance.vue';
import AppAvatar from '@/layouts/components/app-avatar.vue';
</script>

<template>
  <q-header class="h-14 px-4 flex items-center">
    <div class="flex-1">
      <span class="text-xl">{{ $package.productName }}</span>
    </div>
    <div class="px-2 flex">
      <q-btn icon="search" size="12px" flat round />
      <q-btn icon="g_translate" size="12px" flat round />
      <q-btn icon="notifications" size="12px" flat round>
        <q-badge color="negative" floating>{{ Math.ceil(Math.random() * 10) }}</q-badge>
      </q-btn>
      <app-appearance />
    </div>
    <app-avatar />
  </q-header>
</template>
