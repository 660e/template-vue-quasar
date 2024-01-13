<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { date, QTableColumn } from 'quasar';
import { examplesApi } from '@/apis/examples';
import { CTableHandleType } from '@/components/table';

defineOptions({ name: 'components-table' });

const rows = ref();
const columns: QTableColumn[] = [
  { name: 'name', label: 'Name', field: row => `${row.name.title} ${row.name.first} ${row.name.last}`, align: 'left', required: true },
  { name: 'gender', label: 'Gender', field: 'gender', align: 'left' },
  { name: 'age', label: 'Age', field: row => row.dob.age, align: 'left' },
  { name: 'email', label: 'Email', field: 'email', align: 'left' },
  { name: 'location', label: 'Location', field: row => `${row.location.country} ${row.location.state} ${row.location.city}`, align: 'left' },
  {
    name: 'coordinates',
    label: 'Coordinates',
    field: row => `${row.location.coordinates.latitude}, ${row.location.coordinates.longitude}`,
    align: 'left'
  },
  { name: 'date', label: 'Date', field: row => row.dob.date, format: val => date.formatDate(val, 'YYYY-MM-DD HH:mm:ss'), align: 'left' },
  { name: 'handle', label: 'Handle', field: 'handle', align: 'left', required: true }
];
const loading = ref(true);
const handles: CTableHandleType[] = [
  { label: 'Edit', click: row => console.log(row), disable: row => row.dob.age >= 60, tooltip: row => (row.dob.age >= 60 ? row.email : '') },
  { label: 'Remove', click: row => console.log(row), color: 'negative', hide: row => row.dob.age < 60 }
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
