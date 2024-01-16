<script lang="ts" setup>
import { ref } from 'vue';
import { QTableColumn } from 'quasar';
import { VisibleColumnsOptionType } from '../index';

defineOptions({ name: 'columns-component' });

const $emit = defineEmits(['selected']);
const $props = defineProps<{
  columns: QTableColumn[];
}>();

const options = ref<VisibleColumnsOptionType[]>(
  $props.columns
    .filter(column => !column.required)
    .map(column => {
      return {
        name: column.name,
        label: column.label,
        selected: true
      };
    })
);
const selected = (option: VisibleColumnsOptionType) => {
  option.selected = !option.selected;
  const selected = options.value.filter(option => option.selected).map(option => option.name);
  $emit('selected', selected);
};
</script>

<template>
  <q-btn icon="view_column" color="grey-7" dense outline>
    <q-tooltip>{{ $q.lang.table.columns }}</q-tooltip>
    <q-menu>
      <q-list dense>
        <q-item v-for="option in options" :key="option.name" @click="selected(option)" clickable>
          <q-item-section :class="{ 'text-primary': option.selected }">{{ option.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>
