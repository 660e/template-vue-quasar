<script lang="ts" setup></script>

<template>
  <q-btn dense flat round>
    <q-icon name="img:https://avatars.githubusercontent.com/u/28943787" class="rounded-full overflow-hidden" />
    <q-popup-proxy class="w-80">
      <div class="h-20 bg-blue-100 relative">
        <div class="text-center pt-4">Quasar</div>
        <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 border-4 border-white rounded-full">
          <q-avatar size="72px">
            <img src="https://avatars.githubusercontent.com/u/28943787" />
          </q-avatar>
        </div>
      </div>
      <div class="h-40"></div>
    </q-popup-proxy>
  </q-btn>
</template>
