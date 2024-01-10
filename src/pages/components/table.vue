<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { date, QTableColumn } from 'quasar';
import { examplesApi } from '@/apis/examples';
import { CTableHandle } from '@/components/table';

defineOptions({ name: 'components-table' });

const rows = ref();
const columns: QTableColumn[] = [
  { name: 'name', label: 'name', field: row => `${row.name.title} ${row.name.first} ${row.name.last}`, align: 'left', required: true },
  { name: 'gender', label: 'gender', field: 'gender', align: 'left' },
  { name: 'age', label: 'age', field: row => row.dob.age, align: 'left' },
  { name: 'email', label: 'email', field: 'email', align: 'left' },
  { name: 'location', label: 'location', field: row => `${row.location.country} ${row.location.state} ${row.location.city}`, align: 'left' },
  {
    name: 'coordinates',
    label: 'coordinates',
    field: row => `${row.location.coordinates.latitude}, ${row.location.coordinates.longitude}`,
    align: 'left'
  },
  { name: 'date', label: 'date', field: row => row.dob.date, format: val => date.formatDate(val, 'YYYY-MM-DD HH:mm:ss'), align: 'left' },
  { name: 'handle', label: 'handle', field: 'handle', align: 'left', required: true }
];
const loading = ref(true);
const handles: CTableHandle[] = [
  { label: 'edit', click: row => console.log(row), disable: row => row.dob.age >= 60, tooltip: row => (row.dob.age >= 60 ? row.email : '') },
  { label: 'remove', click: row => console.log(row), color: 'negative', hide: row => row.dob.age < 60 }
];

const refresh = () => {
  loading.value = true;
  examplesApi.randomuser({ results: 100 }).then(response => {
    rows.value = response.data.results;
    loading.value = false;
  });
};

onMounted(() => {
  refresh();
});
</script>

<template>
  <div class="h-full p-4 flex">
    <c-table :rows="rows" :columns="columns" :loading="loading" @refresh="refresh" class="flex-1">
      <template v-slot:gender="{ props }">
        <q-icon :name="props.value" :color="props.value === 'male' ? 'primary' : 'negative'" size="xs" />
      </template>
      <template v-slot:handle="{ props }">
        <c-table-handle :handles="handles" :props="props" />
      </template>
    </c-table>
  </div>
</template>
