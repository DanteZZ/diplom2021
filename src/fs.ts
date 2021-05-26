import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from "path";
import {FileTypes,IFileTree, IConfig} from "./interfaces";

var fileInd: number = 0;

const getConfig = (): IConfig => {
    return JSON.parse(readFileSync("./config.json","utf-8"));
}

const getFiles = (dir:string) : IFileTree[] => {
    let files_: IFileTree[] = [];
    if (!dir) {return files_;};

    var files = readdirSync(dir);
    for (var i in files){
          let path: string = join(dir, '/' + files[i]);
          let type : number = 0;
          if (statSync(path).isDirectory()){
              getFiles(path);
              files_.push({
                id:fileInd,
                type:type,
                title:files[i],
                childs:getFiles(path)
              });
          } else {
              type = 1;
              files_.push({
                id:fileInd,
                type:type,
                title:files[i],
                path:path
              });
          }
        fileInd++;
    }
    return files_;
};

export {
    getConfig,
    getFiles
};