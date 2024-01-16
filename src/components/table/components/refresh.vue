<script lang="ts" setup>
defineOptions({ name: 'refresh-component' });
</script>

<template>
  <q-btn @click="$emit('refresh')" icon="refresh" color="grey-7" dense outline>
    <q-tooltip>Refresh</q-tooltip>
  </q-btn>
</template>
