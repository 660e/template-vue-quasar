<script lang="ts" setup>
import { CTableHandleType } from '../index';

defineOptions({ name: 'handle-component' });
defineProps<{
  handles: CTableHandleType[];
}>();
</script>

<template>
  <template v-for="handle in handles" :key="handle.label">
    <q-btn
      :label="handle.label"
      :color="handle.color || 'grey-7'"
      :outline="!handle.color"
      @click="handle.click()"
      padding="0 md"
      dense
      no-caps
      unelevated
    />
  </template>
</template>
