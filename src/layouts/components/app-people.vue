<script lang="ts" setup></script>

<template>
  <q-btn dense flat round>
    <q-icon name="img:https://avatars.githubusercontent.com/u/28943787" class="rounded-full overflow-hidden" />
    <q-popup-proxy class="w-80">
      <div class="h-20 bg-blue-100 relative">
        <div class="text-center pt-4">Quasar</div>
        <q-avatar class="absolute -bottom-9 left-1/2 -translate-x-1/2" size="72px">
          <img src="https://avatars.githubusercontent.com/u/28943787" />
        </q-avatar>
      </div>
      <q-list class="mt-20" dense>
        <q-item clickable v-ripple>
          <q-item-section>Appearance</q-item-section>
          <q-item-section side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-popup-proxy>
  </q-btn>
</template>
