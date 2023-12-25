<script lang="ts" setup>
import { reactive } from 'vue';

defineOptions({ name: 'examples-tailwindcss' });

const colors = reactive({
  quasar: ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-dark', 'bg-positive', 'bg-negative', 'bg-info', 'bg-warning'],
  tailwindcss: ['bg-sky-500', 'bg-teal-500', 'bg-violet-500', 'bg-slate-900', 'bg-green-600', 'bg-red-800', 'bg-cyan-400', 'bg-yellow-400']
});
</script>

<template>
  <div class="p-4 space-y-4">
    <div class="group p-4 bg-green-300">
      <div class="text-blue-600 group-hover:text-white duration-300">text-blue-600 group-hover:text-white duration-300</div>
    </div>
    <div class="theme p-4">background-color: theme('colors.blue.300');</div>
    <div class="p-4 bg-red-400 md:bg-yellow-400 lg:bg-blue-400 xl:bg-green-400">bg-red-400 md:bg-yellow-400 lg:bg-blue-400 xl:bg-green-400</div>

    <div class="flex w-96 space-x-2">
      <dl v-for="(color, key) in colors" :key="key" class="flex-1 space-y-2">
        <dt>{{ key }}</dt>
        <dd v-for="c in color" :key="c" :class="[c]" class="text-white pl-2 leading-8">{{ c }}</dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme {
  background-color: theme('colors.blue.300');
}
</style>
