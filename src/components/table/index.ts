import CTable from './index.vue';
import CTableHandle from './handle.vue';

export interface CTableHandle {
  label: string;
  click: (row: any) => void;

  color?: ((row: any) => string) | string;
  disable?: ((row: any) => boolean) | boolean;
  hide?: ((row: any) => boolean) | boolean;
  tooltip?: ((row: any) => string) | string;
}

export { CTable, CTableHandle };
