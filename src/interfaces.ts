export enum FileTypes {
    dir,word,pdf,html,video,audio
};
export interface FileTree {
    id:number;
    type:number;
    title:string;
    path?:string;
    childs?:FileTree[];
};
