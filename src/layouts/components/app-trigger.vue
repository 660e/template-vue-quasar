<script lang="ts" setup>
import { useLayoutStore } from '@/stores/modules/layout';

const $layoutStore = useLayoutStore();
const toggle = () => {
  $layoutStore.drawer = !$layoutStore.drawer;
  window.dispatchEvent(new Event('resize'));
};
</script>

<template>
  <div
    @click="toggle"
    class="absolute top-1/2 left-0 -translate-y-1/2 h-20 w-4 flex flex-col justify-center items-center cursor-pointer group bg-red-100"
  >
    <div
      :class="[`group-hover:${$layoutStore.drawer ? '' : '-'}rotate-12`]"
      class="h-3 w-1 rounded-full bg-gray-500 translate-y-0.5 duration-300"
    ></div>
    <div
      :class="[`group-hover:${$layoutStore.drawer ? '-' : ''}rotate-12`]"
      class="h-3 w-1 rounded-full bg-gray-500 -translate-y-0.5 duration-300"
    ></div>
  </div>
</template>
