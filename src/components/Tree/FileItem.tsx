import React, { Fragment } from "react";

/* КОМПОНЕНТЫ */
import TreeItem from "@material-ui/lab/TreeItem";

/* ИКОНКИ */
import FolderIcon from "@material-ui/icons/FolderOutlined";
import DescriptionIcon from "@material-ui/icons/DescriptionOutlined";
import LanguageIcon from "@material-ui/icons/LanguageOutlined";
import MovieIcon from "@material-ui/icons/MovieOutlined";
import AudioIcon from "@material-ui/icons/AudiotrackOutlined";
import ImageIcon from "@material-ui/icons/ImageOutlined";

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
