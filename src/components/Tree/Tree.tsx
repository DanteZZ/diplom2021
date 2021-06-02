import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* КОМПОНЕНТЫ */
import TreeView from "@material-ui/lab/TreeView";
import { FileItem } from "./FileItem";

/* ИКОНКИ */
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { IFileTree } from "../../interfaces";

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

type PropsTree = {
  files: IFileTree[];
  selFile: Function;
};

export const Tree: React.FC<PropsTree> = ({ files, selFile }) => {
  const classes = useStyles();
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <FileItem selFile={selFile} items={files} />
    </TreeView>
  );
};
