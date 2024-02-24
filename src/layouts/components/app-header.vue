<script lang="ts" setup>
import $package from '../../../package.json';
</script>

<template>
  <q-header class="h-12 px-4 flex items-center">
    <div class="flex-1">
      <span class="text-xl">{{ $package.productName }}</span>
    </div>
    <q-btn :icon="$q.dark.isActive ? 'brightness_5' : 'brightness_4'" @click="$q.dark.toggle()" dense flat round>
      <q-tooltip>{{ $q.dark.isActive ? 'Light' : 'Dark' }}</q-tooltip>
    </q-btn>
  </q-header>
</template>
