<script lang="ts" setup>
import { reactive, ref } from 'vue';

defineOptions({ name: 'c-dialog' });
withDefaults(
  defineProps<{
    title?: string;
    loading?: boolean;
  }>(),
  {
    loading: false
  }
);

const cardRef = ref();
const position = reactive({ left: 'auto', top: 'auto', x: 0, y: 0 });

const handlePan = (ev: any) => {
  if (ev.isFirst) {
    position.x = ev.position.left - cardRef.value.$el.offsetLeft;
    position.y = ev.position.top - cardRef.value.$el.offsetTop;
  }
  position.left = `${ev.position.left - position.x}px`;
  position.top = `${ev.position.top - position.y}px`;
};
</script>

<template>
  <q-dialog v-bind="$attrs" :persistent="loading">
    <q-card :style="{ left: position.left, top: position.top }" ref="cardRef" class="absolute">
      <div class="bg-gray-100 flex items-center">
        <div v-if="title" class="px-2">{{ title }}</div>
        <q-space v-touch-pan.prevent.mouse="handlePan" class="self-stretch cursor-grab" />
        <q-btn :disable="loading" color="negative" icon="close" padding="sm" size="sm" flat v-close-popup />
      </div>
      <q-separator />

      <slot />
      <slot name="footer" />
    </q-card>
  </q-dialog>
</template>
