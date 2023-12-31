import CTable from './index.vue';
import CTableHandle from './handle.vue';

export interface CTableHandle {
  click: (row: any) => void;
  color?: ((row: any) => string) | string;
  disable?: ((row: any) => boolean) | boolean;
  hide?: ((row: any) => boolean) | boolean;
  label: string;
}

export { CTable, CTableHandle };
