<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { CTableRowHandleType } from './index';

defineOptions({ name: 'c-table-row-handle' });

const $props = defineProps<{
  handles: CTableRowHandleType[];
  props: any;
}>();

const handles = ref($props.handles);

const color = (handle: CTableRowHandleType) => {
  return typeof handle.color === 'function' ? handle.color($props.props.row) : handle.color || 'primary';
};
const disable = (handle: CTableRowHandleType) => {
  return typeof handle.disable === 'function' ? handle.disable($props.props.row) : handle.disable;
};
const tooltip = (handle: CTableRowHandleType) => {
  return typeof handle.tooltip === 'function' ? handle.tooltip($props.props.row) : handle.tooltip;
};

watchEffect(() => {
  handles.value = $props.handles.filter(handle => {
    return !(typeof handle.hide === 'function' ? handle.hide($props.props.row) : handle.hide);
  });
});
</script>

<template>
  <div class="space-x-2">
    <q-btn
      v-for="handle in handles"
      :key="handle.label"
      :label="handle.label"
      :color="color(handle)"
      :disable="disable(handle)"
      @click="handle.click(props.row)"
      size="13px"
      padding="0 sm"
      no-caps
      outline
    >
      <q-tooltip v-if="tooltip(handle)">{{ tooltip(handle) }}</q-tooltip>
    </q-btn>
  </div>
</template>
