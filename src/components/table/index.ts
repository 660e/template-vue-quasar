import CTable from './index.vue';
import CTableHandle from './handle.vue';

export interface CTableHandle {
  click: (row: any) => void;
  color?: string;
  disable?: boolean;
  hide?: boolean;
  label: string;
}

export { CTable, CTableHandle };
