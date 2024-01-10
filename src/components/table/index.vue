<script lang="ts" setup>
import { onMounted, ref, useAttrs } from 'vue';
import { QTableColumn } from 'quasar';

defineOptions({ name: 'c-table' });

const $attrs = useAttrs();

const CTableRef = ref();

const height = ref('auto');
const width = ref('auto');

const columns = $attrs.columns as QTableColumn[];
const visibleColumns = ref(columns.filter(column => !column.required).map(column => column.label));

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
    :class="{ 'c-table-handle': columns.map(column => column.name).includes('handle') }"
    :visible-columns="visibleColumns"
    class="c-table"
    ref="CTableRef"
    bordered
    flat
  >
    <template v-slot:top>
      <q-space />
      <q-select
        v-model="visibleColumns"
        :options="columns.filter(column => !column.required)"
        :display-value="$q.lang.table.columns"
        option-value="label"
        dense
        emit-value
        map-options
        multiple
        options-dense
        outlined
      />
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
