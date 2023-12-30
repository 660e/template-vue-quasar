<script lang="ts" setup>
import type { CTableHandle } from './index';

defineOptions({ name: 'c-table-handle' });
defineProps<{
  handles: CTableHandle[];
  props: any;
}>();
</script>

<template>
  <div class="space-x-2">
    <q-btn
      v-for="handle in $props.handles"
      :key="handle.label"
      :label="handle.label"
      :color="handle.color || 'primary'"
      @click="handle.click($props.props.row)"
      size="13px"
      padding="0 sm"
      outline
    />
  </div>
</template>
