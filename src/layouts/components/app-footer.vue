<script lang="ts" setup>
import $package from '../../../package.json';
</script>

<template>
  <q-separator />
  <div class="px-4 h-9 flex justify-between items-center">
    <div class="flex space-x-2">
      <template v-for="(route, index) in $route.matched.filter(e => e.name)" :key="index">
        <span v-if="index !== 0">/</span>
        <span>{{ route.meta.title }}</span>
      </template>
    </div>
    <div class="text-gray-400 text-xs">{{ $package.version }}-{{ $q.version }}</div>
  </div>
</template>
