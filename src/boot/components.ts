import { boot } from 'quasar/wrappers';

import { CDialog } from '@/components/dialog';
import { CTable, CTableRowHandle } from '@/components/table';

const components = [CDialog, CTable, CTableRowHandle];

export default boot(({ app }) => {
  components.forEach(c => app.component(c.name, c));
});
