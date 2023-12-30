<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({ name: 'examples-ref' });

const a = ref(0);
const b = ref({ x: 0 });
const c = ref([0]);

const fn1 = () => {
  a.value++;
};
const fn2 = () => {
  b.value.x++;
};
const fn3 = () => {
  b.value = { x: 0 };
};
const fn4 = () => {
  c.value[0]++;
};
const fn5 = () => {
  c.value = [0];
};
</script>

<template>
  <div class="p-4 space-y-4">
    <q-btn @click="fn1" label="+" color="primary" unelevated />
    <pre>{{ a }}</pre>
    <div class="space-x-2">
      <q-btn @click="fn2" label="+" color="primary" unelevated />
      <q-btn @click="fn3" label="=" color="primary" unelevated />
    </div>
    <pre>{{ b }}</pre>
    <div class="space-x-2">
      <q-btn @click="fn4" label="+" color="primary" unelevated />
      <q-btn @click="fn5" label="=" color="primary" unelevated />
    </div>
    <pre>{{ c }}</pre>
  </div>
</template>
