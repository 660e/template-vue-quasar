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
.c-table {
  :deep(.q-table__middle) {
    th {
      background-color: theme('colors.gray.100');
      position: sticky;
      top: 0;
      z-index: 2;
      &:first-child {
        left: 0;
        z-index: 3;
      }
    }
    td {
      &:first-child,
      &:last-child {
        background-color: theme('colors.white');
        position: sticky;
        z-index: 1;
      }
      &:first-child {
        left: 0;
      }
    }
  }
  :deep(.q-table__bottom) {
    background-color: theme('colors.gray.100');
  }

  &.c-table-handle :deep(.q-table__middle) {
    th:last-child,
    td:last-child {
      right: 0;
    }
  }

  &.q-table--dark {
    :deep(.q-table__middle) {
      th {
        background-color: theme('colors.gray.900');
      }
      td {
        &:first-child,
        &:last-child {
          background-color: $dark;
        }
      }
    }
    :deep(.q-table__bottom) {
      background-color: theme('colors.gray.900');
    }
  }
}
</style>
