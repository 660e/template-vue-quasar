<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

defineOptions({ name: 'examples-i18n' });

const { locale, t } = useI18n();
const text = ref(t('language'));

const language = (lang: string) => {
  locale.value = lang;
};

watch(
  () => locale.value,
  () => (text.value = t('language'))
);
</script>

<template>
  <div class="p-4 space-y-4">
    <div class="space-x-2">
      <q-btn @click="language('en-US')" label="English" color="primary" no-caps unelevated />
      <q-btn @click="language('zh-CN')" label="中文" color="primary" unelevated />
    </div>
    <div>
      <div>$t('language') -> {{ $t('language') }}</div>
      <div>text -> {{ text }}</div>
    </div>
  </div>
</template>
