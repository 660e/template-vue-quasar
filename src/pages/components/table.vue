<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { date, QTableColumn } from 'quasar';
import { examplesApi } from '@/apis/examples';
import { CTableHandle } from '@/components/table';

defineOptions({ name: 'components-table' });

const rows = ref();
const columns: QTableColumn[] = [
  { name: 'name', label: 'name', field: row => `${row.name.title} ${row.name.first} ${row.name.last}`, align: 'left' },
  { name: 'gender', label: 'gender', field: 'gender' },
  { name: 'age', label: 'age', field: row => row.dob.age },
  { name: 'email', label: 'email', field: 'email' },
  { name: 'date', label: 'date', field: row => row.dob.date, format: val => date.formatDate(val, 'YYYY-MM-DD HH:mm:ss') },
  { name: 'handle', label: 'handle', field: 'handle' }
];
const loading = ref(true);
const handles: CTableHandle[] = [
  { label: 'edit', click: row => console.log(row), hide: row => row.dob.age < 60 },
  { label: 'remove', click: row => console.log(row), color: 'negative', disable: row => row.dob.age >= 60 }
];

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
      <template v-slot:handle="{ props }">
        <c-table-handle :handles="handles" :props="props" />
      </template>
    </c-table>
  </div>
</template>
