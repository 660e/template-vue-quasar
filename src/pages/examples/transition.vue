<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({ name: 'examples-transition' });

const custom = ref(true);
const bounce = ref(true);
const fade = ref(true);
</script>

<template>
  <div class="p-4 space-y-4">
    <transition name="custom" mode="out-in">
      <section v-if="custom" @click="custom = !custom">Custom</section>
      <section v-else @click="custom = !custom">Custom</section>
    </transition>
    <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight" mode="out-in">
      <section v-if="bounce" @click="bounce = !bounce">Bounce</section>
      <section v-else @click="bounce = !bounce">Bounce</section>
    </transition>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
      <section v-if="fade" @click="fade = !fade">Fade</section>
      <section v-else @click="fade = !fade">Fade</section>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
section {
  height: 40px;
  width: 400px;
  background-color: theme('colors.gray.300');
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}
.custom-enter-active {
  transition: opacity 0.5s, transform 0.5s;
}
.custom-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.custom-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.custom-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.custom-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
