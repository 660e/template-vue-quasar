<script lang="ts" setup>
import $package from '../../../package.json';
</script>

<template>
  <div class="text-gray-400 text-xs">{{ $package.version }}-{{ $q.version }}</div>
</template>
