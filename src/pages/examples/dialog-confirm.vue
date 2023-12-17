<script lang="ts" setup>
import { ref } from 'vue';
import { examplesApi } from '@/apis/examples';

const props = defineProps<{ seed: string }>();
const emit = defineEmits(['confirm', 'update:model-value']);

const loading = ref(false);

const confirm = (): void => {
  loading.value = true;
  examplesApi
    .randomuser({ seed: props.seed })
    .then(r => {
      emit('confirm', r.data);
      cancel();
    })
    .finally(() => {
      loading.value = false;
    });
};
const cancel = (): void => {
  emit('update:model-value', false);
};
</script>

<template>
  <q-dialog v-bind="$attrs" :persistent="loading" @hide="cancel">
    <q-card>
      <q-card-section class="space-y-4">
        <q-field label="seed" class="w-96" dense outlined readonly stack-label>
          <template v-slot:control>
            <div>{{ seed }}</div>
          </template>
        </q-field>
        <div class="flex justify-end space-x-2">
          <q-btn :disable="loading" @click="cancel" label="cancel" color="primary" outline />
          <q-btn :loading="loading" @click="confirm" label="confirm" color="primary" unelevated />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
