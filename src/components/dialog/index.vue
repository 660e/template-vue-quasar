<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { tooltipJumpUp } from '@/components';

defineOptions({ name: 'c-dialog' });
defineProps<{ title: string }>();
defineEmits(['cancel', 'confirm']);

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
  <q-dialog v-bind="$attrs">
    <q-card :style="{ left: position.left, top: position.top }" ref="cardRef" class="absolute">
      <div class="bg-gray-100 flex items-center">
        <div class="px-2">{{ $props.title }}</div>
        <q-space v-touch-pan.prevent.mouse="handlePan" class="self-stretch cursor-grab" />
        <q-btn color="negative" icon="close" padding="sm" size="sm" flat v-close-popup>
          <q-tooltip v-bind="tooltipJumpUp">Close</q-tooltip>
        </q-btn>
      </div>

      <slot />

      <div class="bg-gray-100 flex justify-end p-2 space-x-2">
        <q-btn @click="$emit('cancel')" label="cancel" color="primary" flat />
        <q-btn @click="$emit('confirm')" label="confirm" color="primary" unelevated />
      </div>
    </q-card>
  </q-dialog>
</template>
