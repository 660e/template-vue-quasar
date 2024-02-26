<script lang="ts" setup></script>

<template>
  <q-btn :icon="$q.dark.isActive ? 'brightness_5' : 'brightness_4'" @click="$q.dark.toggle()" size="12px" flat round>
    <q-tooltip>{{ $q.dark.isActive ? 'Light' : 'Dark' }}</q-tooltip>
  </q-btn>
</template>
