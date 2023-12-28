<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { examplesApi } from '@/apis/examples';
import type { Row } from './models';

defineOptions({ name: 'components-table' });

const rows = ref();
const columns = ref([
  { label: 'name', field: (row: Row) => `${row.name.title} ${row.name.first} ${row.name.last}` },
  { label: 'email', field: 'email' }
]);

onMounted(() => {
  examplesApi.randomuser({ results: 10 }).then(response => {
    rows.value = response.data.results;
  });
});
</script>

<template>
  <div class="p-4">
    <c-table :rows="rows" :columns="columns" />
  </div>
</template>
