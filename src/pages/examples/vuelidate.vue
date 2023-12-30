<script lang="ts" setup>
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

defineOptions({ name: 'examples-vuelidate' });

const state = reactive({
  a: '',
  b: '',
  c: ''
});
const rules = {
  a: { required },
  b: { email },
  c: { fn: (value: string) => value.length === 4 }
};
const v$ = useVuelidate(rules, state);

const touch = () => v$.value.$touch();
const reset = () => v$.value.$reset();
</script>

<template>
  <div class="p-4 flex space-x-4">
    <div class="space-y-4 w-96">
      <q-input
        v-model="v$.a.$model"
        :error="v$.a.$error"
        :error-message="v$.a.$error ? v$.a.$errors[0].$message as string : undefined"
        @input="v$.a.$touch"
        label="a"
        hint="required"
        dense
        outlined
      />
      <q-input
        v-model="v$.b.$model"
        :error="v$.b.$error"
        :error-message="v$.b.$error ? v$.b.$errors[0].$message as string : undefined"
        @input="v$.b.$touch"
        label="b"
        hint="email"
        dense
        outlined
      />
      <q-input
        v-model="v$.c.$model"
        :error="v$.c.$error"
        error-message="value.length !== 4"
        @input="v$.c.$touch"
        label="c"
        hint="value.length === 4"
        dense
        outlined
      />
      <div class="space-x-2">
        <q-btn @click="touch" label="touch" color="primary" unelevated />
        <q-btn @click="reset" label="reset" color="primary" unelevated />
      </div>
    </div>
    <pre>{{ v$ }}</pre>
  </div>
</template>
