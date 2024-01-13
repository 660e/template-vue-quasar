import CTable from './index.vue';
import CTableRowHandle from './row-handle.vue';

export interface CTableRowHandleType {
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

export { CTable, CTableRowHandle };
