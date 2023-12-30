<script lang="ts" setup>
import type { CTableHandle } from './index';
import type { QTableProps } from 'quasar';

defineOptions({ name: 'c-table-handle' });

const props = defineProps<{
  handles: CTableHandle[];
  props: QTableProps;
}>();

console.log(props);
</script>

<template>
  <div>handle</div>
</template>
