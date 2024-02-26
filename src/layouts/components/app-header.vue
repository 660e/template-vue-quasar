<script lang="ts" setup>
import $package from '../../../package.json';

import AppAppearance from '@/layouts/components/app-appearance.vue';
import AppAvatar from '@/layouts/components/app-avatar.vue';
</script>

<template>
  <q-header class="h-12 px-4 flex items-center space-x-1">
    <div class="flex-1">
      <span class="text-xl">{{ $package.productName }}</span>
    </div>
    <app-appearance />
    <app-avatar />
  </q-header>
</template>
