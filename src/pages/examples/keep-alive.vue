<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({ name: 'examples-keep-alive' });

const input = ref();
</script>

<template>
  <div class="p-4">
    <q-input v-model="input" label="Input" class="w-96" dense outlined />
  </div>
</template>
