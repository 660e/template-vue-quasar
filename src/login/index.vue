<script lang="ts" setup>
import { reactive } from 'vue';

defineOptions({ name: 'app-login' });

const form = reactive({
  username: 'admin',
  password: '123456'
});
</script>

<template>
  <q-card class="h-screen flex justify-center" flat>
    <div class="flex flex-col items-center py-8">
      <img src="@/assets/quasar-logo-vertical.svg" class="w-40 mb-8" />
      <div class="border border-gray-300 rounded p-4 w-80 bg-gray-50">
        <div class="leading-none pb-2">Username</div>
        <q-input v-model="form.username" type="text" class="bg-white mb-4" dense outlined />
        <div class="leading-none pb-2">Password</div>
        <q-input v-model="form.password" type="password" class="bg-white mb-4" dense outlined />
        <q-btn label="Sign in" color="primary" class="w-full" unelevated no-caps />
      </div>
      <q-space />
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, distinctio.</div>
    </div>
  </q-card>
</template>
