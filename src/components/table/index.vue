<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { QTableColumn } from 'quasar';

defineOptions({ name: 'c-table' });

const CTableRef = ref();

const height = ref('auto');
const width = ref('auto');

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
    :class="{ 'c-table-handle': ($attrs.columns as QTableColumn[]).map(column => column.name).includes('handle') }"
    class="c-table"
    ref="CTableRef"
    bordered
    flat
  >
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
