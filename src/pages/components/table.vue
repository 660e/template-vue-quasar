<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { examplesApi } from '@/apis/examples';
import type { Row } from './models';

defineOptions({ name: 'components-table' });

const rows = ref<Row[]>([]);
const columns = [
  { label: 'name', field: (row: Row) => `${row.name.title} ${row.name.first} ${row.name.last}`, align: 'left' },
  { label: 'gender', field: 'gender' },
  { label: 'age', field: (row: Row) => row.dob.age },
  { label: 'email', field: 'email' },
  { label: 'date', field: (row: Row) => row.dob.date }
];

onMounted(() => {
  examplesApi.randomuser({ results: 100 }).then(response => {
    rows.value = response.data.results;
  });
});
</script>

<template>
  <div class="h-full p-4">
    <c-table :rows="rows" :columns="columns" />
  </div>
</template>
