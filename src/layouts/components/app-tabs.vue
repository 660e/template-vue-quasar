<script lang="ts" setup>
import { ref } from 'vue';

const tab = ref('mails');
</script>

<template>
  <div>
    <q-tabs v-model="tab" align="left" active-color="primary" indicator-color="primary" dense>
      <q-tab name="mails" label="Mails" />
      <q-tab name="alarms" label="Alarms" />
      <q-tab name="movies" label="Movies" />
    </q-tabs>
  </div>
  <q-separator />
</template>
