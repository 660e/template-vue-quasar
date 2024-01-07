<script lang="ts" setup>
import { ref } from 'vue';
import { examplesApi } from '@/apis/examples';

defineOptions({ name: 'confirm-dialog' });

const $emit = defineEmits(['confirm', 'update:model-value']);

const dialog = ref(false);
const seed = ref();

const show = (params: string) => {
  seed.value = params;
  dialog.value = true;
};
const cancel = () => {
  console.log('cancel');
  dialog.value = false;
};
const confirm = () => {
  console.log('confirm');
  examplesApi.randomuser({ seed: seed.value }).then(response => {
    $emit('confirm', response.data);
    cancel();
  });
};

defineExpose({ show });
</script>

<template>
  <c-dialog v-model="dialog" @cancel="cancel" @confirm="confirm" title="CONFIRM">
    <div class="p-4">
      <q-field label="seed" class="w-96" dense outlined readonly stack-label>
        <template v-slot:control>
          <div>{{ seed }}</div>
        </template>
      </q-field>
    </div>
  </c-dialog>
</template>
