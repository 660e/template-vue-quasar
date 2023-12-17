<script lang="ts" setup>
import { ref } from 'vue';
import { uid } from 'quasar';

import DialogConfirm from './dialog-confirm.vue';

defineOptions({ name: 'examples-dialog' });

const seed = ref(uid());
const dialog = ref(false);
const pre = ref();

const random = (): void => {
  seed.value = uid();
};
const confirm = (resolve: object): void => {
  pre.value = resolve;
};
</script>

<template>
  <div class="p-4 space-y-4">
    <q-input v-model="seed" label="seed" class="w-96" dense outlined readonly />
    <div class="space-x-2">
      <q-btn @click="random" label="random" color="primary" unelevated />
      <q-btn @click="dialog = !dialog" label="get" color="primary" unelevated />
    </div>
    <pre>{{ pre }}</pre>
    <dialog-confirm v-model="dialog" @confirm="confirm" :seed="seed" />
  </div>
</template>
