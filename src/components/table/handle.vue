<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { CTableHandle } from './index';

defineOptions({ name: 'c-table-handle' });

const $props = defineProps<{
  handles: CTableHandle[];
  props: any;
}>();

const handles = ref($props.handles);

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
      :color="typeof handle.color === 'function' ? handle.color($props.props.row) : handle.color || 'primary'"
      :disable="typeof handle.disable === 'function' ? handle.disable($props.props.row) : handle.disable"
      @click="handle.click($props.props.row)"
      size="13px"
      padding="0 sm"
      outline
    />
  </div>
</template>
