export interface Node {
  id: number | string;
  label: number | string;
  children?: Node[];
}
