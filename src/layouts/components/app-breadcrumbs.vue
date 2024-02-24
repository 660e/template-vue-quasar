<script lang="ts" setup></script>

<template>
  <q-breadcrumbs>
    <q-breadcrumbs-el v-for="(route, index) in $route.matched.filter(e => e.name)" :key="index" :label="route.meta.title" />
  </q-breadcrumbs>
</template>
