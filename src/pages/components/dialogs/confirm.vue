<script lang="ts" setup>
import { ref } from 'vue';
import { examplesApi } from '@/apis/examples';

defineOptions({ name: 'confirm-dialog' });

const $emit = defineEmits(['confirm']);

const dialog = ref(false);
const loading = ref(false);
const seed = ref();

const show = (params: string) => {
  seed.value = params;
  dialog.value = true;
};
const cancel = () => {
  dialog.value = false;
};
const confirm = () => {
  loading.value = true;
  examplesApi
    .randomuser({ seed: seed.value })
    .then(response => {
      $emit('confirm', response.data);
      cancel();
    })
    .finally(() => {
      loading.value = false;
    });
};

defineExpose({ show });
</script>

<template>
  <c-dialog v-model="dialog" :loading="loading" @cancel="cancel" @confirm="confirm" title="Confirm">
    <div class="p-4">
      <q-field label="Seed" class="w-96" dense outlined readonly stack-label>
        <template v-slot:control>
          <div>{{ seed }}</div>
        </template>
      </q-field>
    </div>
  </c-dialog>
</template>
