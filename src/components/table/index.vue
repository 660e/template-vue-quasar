<script lang="ts" setup>
defineOptions({ name: 'c-table' });
</script>

<template>
  <q-table v-bind="$attrs" :rows-per-page-options="[20, 50, 100]" class="c-table" bordered flat />
</template>

<style lang="scss" scoped>
.c-table {
  height: 500px;

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
