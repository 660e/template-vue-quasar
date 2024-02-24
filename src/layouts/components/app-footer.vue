<script lang="ts" setup>
import AppBreadcrumbs from '@/layouts/components/app-breadcrumbs.vue';
import AppVersion from '@/layouts/components/app-version.vue';
</script>

<template>
  <q-separator />
  <div class="px-4 h-9 flex justify-between items-center">
    <app-breadcrumbs />
    <app-version />
  </div>
</template>
