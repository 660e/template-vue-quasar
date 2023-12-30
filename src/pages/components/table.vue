<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { date } from 'quasar';
import { examplesApi } from '@/apis/examples';
import type { Row } from './models';

defineOptions({ name: 'components-table' });

const rows = ref<Row[]>([]);
const columns = [
  { name: 'name', label: 'name', field: (row: Row) => `${row.name.title} ${row.name.first} ${row.name.last}`, align: 'left' },
  { name: 'gender', label: 'gender', field: 'gender' },
  { name: 'age', label: 'age', field: (row: Row) => row.dob.age },
  { name: 'email', label: 'email', field: 'email' },
  { name: 'date', label: 'date', field: (row: Row) => row.dob.date, format: (val: string) => date.formatDate(val, 'YYYY-MM-DD HH:mm:ss') }
];
const loading = ref(true);

onMounted(() => {
  examplesApi.randomuser({ results: 100 }).then(response => {
    rows.value = response.data.results;
    loading.value = false;
  });
});
</script>

<template>
  <div class="h-full p-4 flex">
    <c-table :rows="rows" :columns="columns" :loading="loading" class="flex-1">
      <template v-slot:gender="{ props }">
        <q-icon :name="props.value" :color="props.value === 'male' ? 'primary' : 'negative'" size="xs" />
      </template>
    </c-table>
  </div>
</template>
