import { boot } from 'quasar/wrappers';
import { useAclStore } from '@/stores/example-store';

const $store = useAclStore();

export default boot(({ app }) => {
  app.directive('acl', (el, binding) => {
    const { value } = binding;
    const allow = value.some((v: string) => $store.acl.includes(v));

    el.style.display = allow ? '' : 'none';
  });
});
