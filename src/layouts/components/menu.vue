<script lang="ts" setup>
import { routes } from '@/router';

defineOptions({ name: 'menu-component' });
</script>

<template>
  <q-list padding>
    <template v-for="route in routes" :key="route.name">
      <q-expansion-item
        v-if="route.children?.length"
        :label="route.meta?.title"
        :icon="route.meta?.icon"
        :default-opened="route.name === $route.matched[1]?.name"
        group="group"
      >
        <q-item v-for="child in route.children" :key="child.name" :to="{ name: child.name }" clickable v-ripple>
          <q-item-section avatar>
            <q-icon />
          </q-item-section>
          <q-item-section>{{ child.meta?.title }}</q-item-section>
        </q-item>
      </q-expansion-item>
      <q-item v-else :to="{ name: route.name }" clickable v-ripple>
        <q-item-section avatar>
          <q-icon :name="route.meta?.icon" />
        </q-item-section>
        <q-item-section>{{ route.meta?.title }}</q-item-section>
      </q-item>
    </template>
  </q-list>
</template>

<style lang="scss" scoped>
.q-item,
.q-expansion-item {
  ::v-deep(.q-item__section--avatar) {
    min-width: auto;
  }
}
</style>
