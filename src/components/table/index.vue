<script lang="ts" setup>
import { computed, ref, useAttrs } from 'vue';
import { QTableColumn } from 'quasar';
import { CTableHandleType } from './index';

import HandleComponent from './components/handle.vue';
import RefreshComponent from './components/refresh.vue';
import ColumnsComponent from './components/columns.vue';

defineOptions({ name: 'c-table' });
defineProps<{
  handles: CTableHandleType[];
}>();

const $attrs = useAttrs();
const columns = $attrs.columns as QTableColumn[];

const visibleColumns = ref();
const selected = (selected: string[]) => {
  visibleColumns.value = selected;
};
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
</script>

<template>
  <q-table
    v-bind="$attrs"
    :rows-per-page-options="[10, 20, 50, 100]"
    :visible-columns="visibleColumns"
    :class="cTableClass"
    class="c-table"
    bordered
    flat
  >
    <template v-slot:top>
      <div class="flex-1">
        <div class="flex p-2 space-x-2">
          <handle-component :handles="handles" />
          <q-space />
          <refresh-component @refresh="$emit('refresh')" />
          <columns-component :columns="columns" @selected="selected" />
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
