import { readFileSync, readdirSync, statSync } from "fs";
import { join, extname, basename } from "path";
import { IFileTree, IConfig } from "../interfaces";
import { FileTypes } from "../enums";

import wordToPdf from "./docto";
import _path from "path";
var fileInd: number = 0;

const getWordFile = (path: string, callback: Function): void => {
  wordToPdf(path, "./temp.pdf").then(() => {
    callback(_path.join(process.cwd(), "temp.pdf"));
  });
};

const isCanFile = (path: string): IFileTree | false => {
  let name = basename(path).replace(/\.[^/.]+$/, "");
  if (name.charAt(0) === "~") {
    return false;
  }

  let ext = extname(path);
  let type = -1;
  switch (ext.toLowerCase()) {
    case ".doc":
      type = FileTypes.word;
      break;
    case ".docx":
      type = FileTypes.word;
      break;
    case ".odt":
      type = FileTypes.word;
      break;
    case ".txt":
      type = FileTypes.word;
      break;
    case ".rtf":
      type = FileTypes.word;
      break;
    case ".pdf":
      type = FileTypes.pdf;
      break;
    case ".pdfa":
      type = FileTypes.pdf;
      break;
    case ".html":
      type = FileTypes.html;
      break;
    case ".htm":
      type = FileTypes.html;
      break;
    case ".mp4":
      type = FileTypes.video;
      break;
    case ".avi":
      type = FileTypes.video;
      break;
    case ".wmv":
      type = FileTypes.video;
      break;
    case ".3gp":
      type = FileTypes.video;
      break;
    case ".wav":
      type = FileTypes.audio;
      break;
    case ".mp3":
      type = FileTypes.audio;
      break;
    case ".ogg":
      type = FileTypes.audio;
      break;
    case ".jpg":
      type = FileTypes.image;
      break;
    case ".jpeg":
      type = FileTypes.image;
      break;
    case ".png":
      type = FileTypes.image;
      break;
    case ".bmp":
      type = FileTypes.image;
      break;
    case ".gif":
      type = FileTypes.image;
      break;
    case ".tiff":
      type = FileTypes.image;
      break;
    default:
      return false;
  }
  return {
    id: 0,
    type: type,
    title: name,
    path: path,
  };
};

const getConfig = (): IConfig => {
  return JSON.parse(readFileSync("./config.json", "utf-8"));
};

const getFiles = (dir: string): IFileTree[] => {
  let files_: IFileTree[] = [];
  if (!dir) {
    return files_;
  }

  var files = readdirSync(dir);
  for (var i in files) {
    let path: string = join(dir, "/" + files[i]);
    let type: number = 0;
    if (statSync(path).isDirectory()) {
      getFiles(path);
      files_.push({
        id: fileInd,
        type: type,
        title: files[i],
        childs: getFiles(path),
        path: "",
      });
    } else {
      let file = isCanFile(path);
      if (file) {
        files_.push({ ...file, id: fileInd });
      }
    }
    fileInd++;
  }
  return files_;
};

export { getConfig, getFiles, getWordFile };
