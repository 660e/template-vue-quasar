import { onMounted, onUnmounted, ref, Ref } from 'vue';

export function useMouse(): { x: Ref<number>; y: Ref<number> } {
  const x = ref(0);
  const y = ref(0);

  function update(event: MouseEvent) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => window.addEventListener('mousemove', update));
  onUnmounted(() => window.removeEventListener('mousemove', update));

  return { x, y };
}
