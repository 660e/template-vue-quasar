<script lang="ts" setup></script>

<template>
  <q-btn icon="notifications" dense flat round>
    <q-badge color="negative" floating>{{ Math.ceil(Math.random() * 99) }}</q-badge>
  </q-btn>
</template>
