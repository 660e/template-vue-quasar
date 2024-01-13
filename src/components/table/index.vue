<script lang="ts" setup>
import { computed, onMounted, ref, useAttrs } from 'vue';
import { QTableColumn } from 'quasar';

import ViewColumn from './components/view-column.vue';

defineOptions({ name: 'c-table' });

const CTableRef = ref();
const height = ref('auto');
const width = ref('auto');

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

onMounted(() => {
  height.value = `${CTableRef.value.$el.clientHeight}px`;
  width.value = `${CTableRef.value.$el.clientWidth}px`;
});
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
          <view-column :columns="columns" @selected="selected" />
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
