<script lang="ts" setup>
defineOptions({ name: 'app-layout' });
</script>

<template>
  <q-layout view="hhh lpr fff">
    <q-header>
      <q-toolbar />
    </q-header>
    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
