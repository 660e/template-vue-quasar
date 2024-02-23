<script lang="ts" setup>
import $package from '../../../package.json';
</script>

<template>
  <q-header>
    <q-toolbar>
      <q-toolbar-title>{{ $package.productName }}</q-toolbar-title>
      <q-btn :icon="$q.dark.isActive ? 'brightness_5' : 'brightness_4'" @click="$q.dark.toggle()" dense flat round>
        <q-tooltip>{{ $q.dark.isActive ? 'Light' : 'Dark' }}</q-tooltip>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>
