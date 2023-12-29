<script lang="ts" setup>
import { onMounted, ref } from 'vue';

defineOptions({ name: 'c-table' });

const height = ref('auto');
const CTable = ref();

onMounted(() => {
  height.value = `${CTable.value.$el.clientHeight}px`;
});
</script>

<template>
  <q-table v-bind="$attrs" :rows-per-page-options="[10, 20, 50]" :style="{ height }" ref="CTable" class="c-table" bordered flat>
    <template v-slot:loading>
      <q-inner-loading class="z-10" color="primary" showing />
    </template>

    <template v-slot:body-cell-gender="props">
      <q-td :props="props">
        <q-icon :name="props.row.gender" :color="props.row.gender === 'male' ? 'primary' : 'negative'" size="xs" />
      </q-td>
    </template>
  </q-table>
</template>

<style lang="scss" scoped>
.c-table {
  :deep(thead tr:first-child th),
  :deep(.q-table__bottom) {
    background-color: theme('colors.gray.100');
    top: 0;
  }
  :deep(thead tr th) {
    position: sticky;
    z-index: 1;
  }

  &.q-table--dark {
    :deep(thead tr:first-child th),
    :deep(.q-table__bottom) {
      background-color: theme('colors.gray.900');
    }
  }
}
</style>
