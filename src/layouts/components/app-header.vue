<script lang="ts" setup>
import $package from '../../../package.json';

import AppNotifications from '@/layouts/components/app-notifications.vue';
import AppPeople from '@/layouts/components/app-people.vue';
</script>

<template>
  <q-header class="h-12 px-4 flex items-center space-x-1">
    <div class="flex-1">
      <span class="text-xl">{{ $package.productName }}</span>
    </div>

    <app-notifications />
    <app-people />
  </q-header>
</template>
