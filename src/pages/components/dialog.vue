<script lang="ts" setup>
import { ref } from 'vue';
import { uid } from 'quasar';

import ConfirmDialog from './dialogs/confirm.vue';

defineOptions({ name: 'components-dialog' });

const dialogRef = ref();
const seed = ref(uid());
const pre = ref();

const random = () => {
  seed.value = uid();
};
const get = () => {
  dialogRef.value.show(seed.value);
};
const confirm = (resolve: object) => {
  pre.value = resolve;
};
</script>

<template>
  <div class="p-4 space-y-4">
    <q-input v-model="seed" label="Seed" class="w-96" dense outlined readonly />
    <div class="space-x-2">
      <q-btn @click="random" label="Random" color="primary" no-caps unelevated />
      <q-btn @click="get" label="Get" color="primary" no-caps unelevated />
    </div>
    <pre>{{ pre }}</pre>
    <confirm-dialog @confirm="confirm" ref="dialogRef" />
  </div>
</template>
