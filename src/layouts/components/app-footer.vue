<script lang="ts" setup>
import AppBreadcrumbs from './app-breadcrumbs.vue';
import AppVersion from './app-version.vue';
</script>

<template>
  <q-separator />
  <div class="px-4 h-9 flex justify-between items-center">
    <app-breadcrumbs />
    <app-version />
  </div>
</template>
