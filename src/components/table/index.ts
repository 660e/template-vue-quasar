import CTable from './index.vue';
import CTableRowHandle from './row-handle.vue';

export interface CTableHandleType {
  label: string;
  click: () => void;
  color?: string;
  disable?: boolean;
  hide?: boolean;
  tooltip?: string;
  children?: CTableHandleType[];
}

export interface CTableRowHandleType {
  label: string;
  click: (row: any) => void;
  color?: ((row: any) => string) | string;
  disable?: ((row: any) => boolean) | boolean;
  hide?: ((row: any) => boolean) | boolean;
  tooltip?: ((row: any) => string) | string;
}

export interface VisibleColumnsOptionType {
  label: string;
  value: string;
}

export { CTable, CTableRowHandle };
