<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({ name: 'app-login' });

const $router = useRouter();

const loading = ref(false);
const form = reactive({
  username: 'admin',
  password: '123456'
});

const signIn = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    $router.push({ name: 'home' });
  }, 2000);
};
</script>

<template>
  <q-card class="h-screen flex justify-center" flat>
    <div class="flex flex-col items-center py-8">
      <img src="@/assets/quasar-logo-vertical.svg" class="w-40 mb-8" />
      <div class="border border-gray-300 rounded p-4 space-y-4 w-80 bg-gray-50">
        <q-input v-model="form.username" :disable="loading" label="Username" type="text" class="bg-white" dense outlined />
        <q-input v-model="form.password" :disable="loading" label="Password" type="password" class="bg-white" dense outlined />
        <q-btn :loading="loading" @click="signIn" label="Sign in" color="primary" class="w-full" padding="sm 0" unelevated no-caps />
      </div>
      <q-space />
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, consectetur.</div>
    </div>
  </q-card>
</template>
