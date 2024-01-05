import { boot } from 'quasar/wrappers';
import { useAclStore } from '@/stores/example-store';

const $aclStore = useAclStore();

export default boot(({ app }) => {
  app.directive('acl', (el, binding) => {
    const { value } = binding;
    const allow = value.some((v: string) => $aclStore.acl.includes(v));

    el.style.display = allow ? '' : 'none';
  });
});
