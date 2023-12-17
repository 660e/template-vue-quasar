<script lang="ts" setup>
import { ref } from 'vue';
import { examplesApi } from '@/apis/examples';
import { controller } from '@/boot/axios';

defineOptions({ name: 'examples-axios' });

const pre = ref();

const async = (): void => {
  examplesApi
    .randomuser()
    .then(r => {
      pre.value = r.data;
    })
    .catch(error => {
      console.log(error.message);
    })
    .finally(() => {
      console.log('finally');
    });
};
const sync = async (): Promise<void> => {
  try {
    const r = await examplesApi.randomuser();
    pre.value = r.data;
  } catch (error: unknown) {
    console.log((error as Error).message);
  } finally {
    console.log('finally');
  }
};
const abort = (): void => {
  controller.abort();
};
</script>

<template>
  <div class="p-4 space-y-4">
    <div class="space-x-2">
      <q-btn @click="async" label="async" color="primary" unelevated />
      <q-btn @click="sync" label="sync" color="primary" unelevated />
      <q-btn @click="abort" label="abort" color="negative" unelevated />
    </div>
    <pre>{{ pre }}</pre>
  </div>
</template>
