<script lang="ts" setup>
import { ref } from 'vue';
import { QTableColumn } from 'quasar';
import { VisibleColumnsOptionType } from '../index';

defineOptions({ name: 'columns-component' });

const $props = defineProps<{
  columns: QTableColumn[];
}>();

const options = ref<VisibleColumnsOptionType[]>(
  $props.columns.filter(column => !column.required).map(column => ({ label: column.label, value: column.name }))
);
const selected = ref(options.value.map(option => option.value));
</script>

<template>
  <q-btn icon="view_column" color="grey-7" dense outline>
    <q-tooltip>{{ $q.lang.table.columns }}</q-tooltip>
    <q-menu class="p-4">
      <q-option-group
        v-model="selected"
        :options="options"
        @update:model-value="value => $emit('selected', value)"
        class="space-y-4"
        type="toggle"
        dense
      />
    </q-menu>
  </q-btn>
</template>
