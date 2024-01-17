<script lang="ts" setup>
import { CTableHandleType } from '../index';

defineOptions({ name: 'handle-component' });
defineProps<{
  handles: CTableHandleType[];
}>();
</script>

<template>
  <template v-for="handle in handles" :key="handle.label">
    <q-btn-dropdown
      v-if="handle.children?.length"
      :label="handle.label"
      :color="handle.color || 'grey-7'"
      :outline="!handle.color"
      @click="handle.click()"
      padding="0 md"
      dense
      no-caps
      split
      unelevated
    >
      <q-list dense>
        <q-item v-for="item in handle.children" :key="item.label" @click="item.click()" clickable v-close-popup v-ripple>
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn
      v-else
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

<style lang="scss" scoped>
.q-btn-group :deep(.q-btn:last-child) {
  padding: 0 !important;
}
</style>
