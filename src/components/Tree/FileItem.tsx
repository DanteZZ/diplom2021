import React, { Fragment } from "react";

/* КОМПОНЕНТЫ */
import TreeItem from "@material-ui/lab/TreeItem";

/* ИКОНКИ */
import FolderIcon from "@material-ui/icons/Folder";
import DescriptionIcon from "@material-ui/icons/Description";
import LanguageIcon from "@material-ui/icons/Language";
import MovieIcon from "@material-ui/icons/Movie";
import AudioIcon from "@material-ui/icons/Audiotrack";
import ImageIcon from "@material-ui/icons/Image";

import { IFileTree } from "../../interfaces";

type PropsTreeItem = {
  items: IFileTree[];
  selFile: Function;
};

const iconList: any[] = [
  <FolderIcon />,
  <DescriptionIcon />,
  <DescriptionIcon />,
  <LanguageIcon />,
  <MovieIcon />,
  <AudioIcon />,
  <ImageIcon />,
];

export const FileItem: React.FC<PropsTreeItem> = ({ items, selFile }) => {
  return (
    <Fragment>
      {items.map((item, i) => (
        <TreeItem
          key={i}
          onClick={(e) => {
            if (item.path) {
              selFile(item);
            }
          }}
          nodeId={item.id.toString()}
          style={{ color: "rgb(70 70 70)" }}
          label={
            <Fragment>
              {iconList[item.type]} {item.title}
            </Fragment>
          }
        >
          {item.childs ? (
            <FileItem selFile={selFile} items={item.childs} />
          ) : (
            ""
          )}
        </TreeItem>
      ))}
    </Fragment>
  );
};
