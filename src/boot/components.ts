import { boot } from 'quasar/wrappers';

import { CTable, CTableHandle } from '@/components/table';

const components = [CTable, CTableHandle];

export default boot(({ app }) => {
  components.forEach(c => app.component(c.name, c));
});
