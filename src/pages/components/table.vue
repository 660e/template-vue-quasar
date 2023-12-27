<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { examplesApi } from '@/apis/examples';

defineOptions({ name: 'components-table' });

const rows = ref();

onMounted(() => {
  examplesApi.randomuser({ results: 10 }).then(response => {
    rows.value = response.data.results;
  });
});
</script>

<template>
  <div class="p-4">
    <c-table :rows="rows" />
  </div>
</template>
