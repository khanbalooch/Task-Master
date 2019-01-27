export class Note {
  id?: number;
  type: string;
  title: string;
  note?: string;
  list?: {text:string, checked:boolean}[];
  color: string;
  created?: Date | string;
}
