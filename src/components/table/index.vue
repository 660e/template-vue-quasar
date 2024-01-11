<script lang="ts" setup>
import { computed, onMounted, ref, useAttrs } from 'vue';
import { QTableColumn } from 'quasar';

defineOptions({ name: 'c-table' });

const $attrs = useAttrs();

const CTableRef = ref();

const height = ref('auto');
const width = ref('auto');

const columns = $attrs.columns as QTableColumn[];
const visibleColumnsOptions = columns.filter(column => !column.required);
const visibleColumns = ref(visibleColumnsOptions.map(column => column.name));
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
    :class="cTableClass"
    :visible-columns="visibleColumns"
    class="c-table"
    ref="CTableRef"
    bordered
    flat
  >
    <template v-slot:top>
      <div class="flex-1">
        <div class="flex p-2 space-x-2">
          <q-space />
          <q-btn @click="$emit('refresh')" icon="refresh" class="self-center" dense flat round>
            <q-tooltip>Refresh</q-tooltip>
          </q-btn>
          <q-select
            v-model="visibleColumns"
            :options="visibleColumnsOptions"
            :display-value="$q.lang.table.columns"
            option-value="name"
            dense
            emit-value
            map-options
            multiple
            options-dense
            outlined
          />
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
