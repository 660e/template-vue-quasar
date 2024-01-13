<script lang="ts" setup>
import { computed, onMounted, ref, useAttrs, watch } from 'vue';
import { extend, QTableColumn } from 'quasar';
import { VisibleColumnsOptionsType } from './index';

defineOptions({ name: 'c-table' });

const $attrs = useAttrs();

const CTableRef = ref();

const height = ref('auto');
const width = ref('auto');

const columns = $attrs.columns as QTableColumn[];
const visibleColumnsOptions = ref(
  extend(
    true,
    [],
    columns
      .filter(column => !column.required)
      .map(column => {
        return {
          name: column.name,
          label: column.label,
          checked: true
        };
      })
  ) as VisibleColumnsOptionsType[]
);

const visibleColumns = ref(visibleColumnsOptions.value.map(column => column.name));
const cTableClass = computed(() => {
  if (columns.map(column => column.name).includes('handle')) {
    if (columns.find(column => column.name === 'handle')?.required) {
      return ['c-table-handle'];
    } else {
      return visibleColumns.value.includes('handle') ? ['c-table-handle'] : null;
    }
  } else {
    return null;
  }
});

onMounted(() => {
  height.value = `${CTableRef.value.$el.clientHeight}px`;
  width.value = `${CTableRef.value.$el.clientWidth}px`;
});

watch(
  () => visibleColumnsOptions,
  n => {
    visibleColumns.value = n.value.filter(column => column.checked).map(column => column.name);
  },
  {
    deep: true
  }
);
</script>

<template>
  <q-table
    v-bind="$attrs"
    :rows-per-page-options="[20, 50, 100]"
    :style="{ height, width }"
    :visible-columns="visibleColumns"
    :class="cTableClass"
    class="c-table"
    ref="CTableRef"
    bordered
    flat
  >
    <template v-slot:top>
      <div class="flex-1">
        <div class="flex p-2 space-x-2">
          <q-space />
          <q-btn @click="$emit('refresh')" icon="refresh" dense outline>
            <q-tooltip>Refresh</q-tooltip>
          </q-btn>
          <q-btn icon="view_column" dense outline>
            <q-tooltip>{{ $q.lang.table.columns }}</q-tooltip>
            <q-menu>
              <q-list dense>
                <q-item v-for="option in visibleColumnsOptions" :key="option.name" @click="option.checked = !option.checked" clickable>
                  <q-item-section :class="{ 'text-primary': option.checked }">{{ option.label }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
        <q-separator />
      </div>
    </template>

    <template v-slot:loading>
      <q-inner-loading class="z-10" color="primary" showing />
    </template>

    <template v-for="slot in Object.keys($slots)" :key="slot" v-slot:[`body-cell-${slot}`]="props">
      <q-td :props="props">
        <slot :name="slot" :props="props" />
      </q-td>
    </template>
  </q-table>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
