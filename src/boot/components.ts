import { boot } from 'quasar/wrappers';

import { CTable } from '@/components/table';

const components = [CTable];

export default boot(({ app }) => {
  components.forEach(c => app.component(c.name, c));
});
