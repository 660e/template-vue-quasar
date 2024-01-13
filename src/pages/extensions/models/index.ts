export interface NodeType {
  id: number | string;
  label: number | string;
  children?: NodeType[];
}
