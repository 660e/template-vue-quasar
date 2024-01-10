<script lang="ts" setup>
import { ref } from 'vue';
import { examplesApi } from '@/apis/examples';
import { controller } from '@/boot/axios';

defineOptions({ name: 'examples-axios' });

const pre = ref();

const async = () => {
  examplesApi
    .randomuser()
    .then(response => {
      pre.value = response.data;
    })
    .catch(error => {
      console.log(error.message);
    })
    .finally(() => {
      console.log('finally');
    });
};
const sync = async () => {
  try {
    const response = await examplesApi.randomuser();
    pre.value = response.data;
  } catch (error: unknown) {
    console.log((error as Error).message);
  } finally {
    console.log('finally');
  }
};
const abort = () => {
  controller.abort();
};
</script>

<template>
  <div class="p-4 space-y-4">
    <div class="space-x-2">
      <q-btn @click="async" label="Async" color="primary" no-caps unelevated />
      <q-btn @click="sync" label="Sync" color="primary" no-caps unelevated />
      <q-btn @click="abort" label="Abort" color="negative" no-caps unelevated />
    </div>
    <pre>{{ pre }}</pre>
  </div>
</template>
