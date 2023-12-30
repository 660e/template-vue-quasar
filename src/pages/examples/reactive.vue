<script lang="ts" setup>
import { reactive } from 'vue';

defineOptions({ name: 'examples-reactive' });

const a = reactive({ x: { y: 0 } });
const b = reactive({ x: [0] });
const c = reactive([0]);
const d = reactive({ d: new Date() });

const fn1 = () => {
  a.x.y++;
};
const fn2 = () => {
  a.x = { y: 0 };
};
const fn3 = () => {
  b.x[0]++;
};
const fn4 = () => {
  b.x = [0];
};
const fn5 = () => {
  c.push(c[c.length - 1] + 1);
};
const fn6 = () => {
  if (c.length > 1) c.splice(c.length - 1, 1);
};
const fn7 = () => {
  d.d = new Date();
};
</script>

<template>
  <div class="p-4 space-y-4">
    <div class="space-x-2">
      <q-btn @click="fn1" label="+" color="primary" unelevated />
      <q-btn @click="fn2" label="=" color="primary" unelevated />
    </div>
    <pre>{{ a }}</pre>
    <div class="space-x-2">
      <q-btn @click="fn3" label="+" color="primary" unelevated />
      <q-btn @click="fn4" label="=" color="primary" unelevated />
    </div>
    <pre>{{ b }}</pre>
    <div class="space-x-2">
      <q-btn @click="fn5" label="+" color="primary" unelevated />
      <q-btn @click="fn6" label="-" color="primary" unelevated />
    </div>
    <pre>{{ c }}</pre>
    <q-btn @click="fn7" label="=" color="primary" unelevated />
    <pre>{{ d }}</pre>
  </div>
</template>
