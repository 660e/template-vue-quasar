<script lang="ts" setup>
import $package from '../../../package.json';

import AppAppearance from '@/layouts/components/app-appearance.vue';
</script>

<template>
  <q-header class="h-12 px-4 flex items-center">
    <div class="flex-1">
      <span class="text-xl">{{ $package.productName }}</span>
    </div>
    <app-appearance />
  </q-header>
</template>
