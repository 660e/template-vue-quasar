import CTable from './index.vue';
import CTableHandle from './handle.vue';

export interface CTableHandle {
  disable?: boolean;
  event: string;
  hide?: boolean;
  label: string;
}

export { CTable, CTableHandle };
