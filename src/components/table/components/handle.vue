<script lang="ts" setup>
import { CTableHandleType } from '../index';

defineOptions({ name: 'handle-component' });
defineProps<{
  handles: CTableHandleType[];
}>();
</script>

<template>
  <div>{{ handles }}</div>
</template>
