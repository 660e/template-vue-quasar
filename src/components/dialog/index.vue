<script lang="ts" setup>
import { tooltipJumpUp } from '@/components';

defineOptions({ name: 'c-dialog' });
defineProps<{ title: string }>();
defineEmits(['cancel', 'confirm']);
</script>

<template>
  <q-dialog v-bind="$attrs">
    <q-card>
      <div class="bg-gray-100 flex justify-between items-center">
        <div class="pl-2">{{ $props.title }}</div>
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
