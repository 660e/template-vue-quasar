<script lang="ts" setup>
import { reactive, ref, watch } from 'vue';
import { useAclStore } from '@/stores/example-store';

defineOptions({ name: 'examples-acl' });

const $aclStore = useAclStore();

const level = ref(1);
const options = reactive([
  { label: 'Level-1', value: 1 },
  { label: 'Level-2', value: 2 },
  { label: 'Level-3', value: 3 }
]);

watch(level, n => {
  switch (n) {
    case 1:
      $aclStore.acl = ['level-1'];
      break;
    case 2:
      $aclStore.acl = ['level-1', 'level-2'];
      break;
    case 3:
      $aclStore.acl = ['level-1', 'level-2', 'level-3'];
      break;
  }
});
</script>

<template>
  <div class="p-4 space-y-4">
    <q-btn-toggle v-model="level" :options="options" class="border-primary" text-color="primary" no-caps unelevated />
    <div class="space-y-2">
      <div v-acl="['level-1', 'level-2', 'level-3']">level-1: Lorem ipsum dolor sit amet.</div>
      <div v-acl="['level-2', 'level-3']">level-2: Provident consequatur officiis obcaecati ea!</div>
      <div v-acl="['level-3']">level-3: Eligendi ab nihil corporis amet!</div>
    </div>
    <pre>{{ $aclStore.acl }}</pre>
  </div>
</template>
