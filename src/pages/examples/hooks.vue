<script lang="ts" setup>
import { useMouse } from './hooks';

defineOptions({ name: 'examples-hooks' });

const { x, y } = useMouse();
</script>

<template>
  <div class="p-4">x:{{ x }} y:{{ y }}</div>
</template>
