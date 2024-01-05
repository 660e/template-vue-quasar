import { boot } from 'quasar/wrappers';

import { CDialog } from '@/components/dialog';
import { CTable, CTableHandle } from '@/components/table';

const components = [CDialog, CTable, CTableHandle];

export default boot(({ app }) => {
  components.forEach(c => app.component(c.name, c));
});
