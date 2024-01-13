import CTable from './index.vue';
import CTableHandle from './handle.vue';

export interface CTableHandleType {
  label: string;
  click: (row: any) => void;
  color?: ((row: any) => string) | string;
  disable?: ((row: any) => boolean) | boolean;
  hide?: ((row: any) => boolean) | boolean;
  tooltip?: ((row: any) => string) | string;
}

export interface VisibleColumnsOptionType {
  name: string;
  label: string;
  selected: boolean;
}

export { CTable, CTableHandle };
