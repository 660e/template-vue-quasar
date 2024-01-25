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
const hide = () => {
  console.log('hide');
};
const confirm = () => {
  loading.value = true;
  examplesApi
    .randomuser({ seed: seed.value })
    .then(response => {
      $emit('confirm', response.data);
      dialog.value = false;
    })
    .finally(() => {
      loading.value = false;
    });
};

defineExpose({ show });
</script>

<template>
  <c-dialog v-model="dialog" :loading="loading" @hide="hide" title="Confirm">
    <div class="p-4">
      <q-field label="Seed" class="w-96" dense outlined readonly stack-label>
        <template v-slot:control>
          <div>{{ seed }}</div>
        </template>
      </q-field>
    </div>

    <template v-slot:footer>
      <q-separator />
      <div class="bg-gray-100 flex justify-end p-2 space-x-2">
        <q-btn :disable="loading" @click="dialog = false" label="Cancel" color="primary" no-caps flat />
        <q-btn :loading="loading" @click="confirm" label="Confirm" color="primary" no-caps unelevated />
      </div>
    </template>
  </c-dialog>
</template>
