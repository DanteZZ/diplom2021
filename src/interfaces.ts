export enum FileTypes {
  dir,
  word,
  pdf,
  html,
  video,
  audio,
  image,
}
export interface IFileTree {
  id: number;
  type: number;
  title: string;
  path: string;
  childs?: IFileTree[];
}
export interface IConfig {
  path: string;
}
