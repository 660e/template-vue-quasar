<script lang="ts" setup>
import { onMounted } from 'vue';
import { Chart } from '@antv/g2';

defineOptions({ name: 'examples-g2' });

onMounted(() => {
  const chartA = new Chart({ container: 'container-a' });
  chartA.options({
    type: 'interval',
    autoFit: true,
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv'
    },
    encode: { x: 'letter', y: 'frequency' },
    axis: { y: { labelFormatter: '.0%' } }
  });
  chartA.render();

  const chartB = new Chart({ container: 'container-b' });
  chartB.options({
    type: 'line',
    autoFit: true,
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/551d80c6-a6be-4f3c-a82a-abd739e12977.csv'
    },
    encode: { x: 'date', y: 'close' }
  });
  chartB.render();
});
</script>

<template>
  <div class="p-4 grid grid-cols-2 gap-4">
    <div class="border border-gray-200 rounded overflow-x-hidden">
      <div id="container-a"></div>
    </div>
    <div class="border border-gray-200 rounded overflow-x-hidden">
      <div id="container-b"></div>
    </div>
  </div>
</template>
