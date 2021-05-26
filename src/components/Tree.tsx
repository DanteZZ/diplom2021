import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import {FileTypes,IFileTree} from "../interfaces";

import FolderIcon from '@material-ui/icons/FolderOutlined'
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined'

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

type PropsTree = {
    files: IFileTree[],
    selFile: Function
}
type PropsTreeItem = {
    items: IFileTree[],
    selFile: Function
}

const iconList:any[] = [
    <FolderIcon/>,
    <DescriptionIcon/>
];

const FileTreeItem: React.FC<PropsTreeItem>  = ({items, selFile}) => {
    return (
        <Fragment>
            {items.map((item,i)=>
            <TreeItem key={i} onClick={
                (e)=>{
                    if (item.path) {
                        selFile(item);
                    }
                }
            } nodeId={item.id.toString()}
            label={
                <Fragment>{iconList[item.type]} {item.title}</Fragment>
            }>{item.childs ? <FileTreeItem selFile={selFile} items={item.childs}/> : "" }
            </TreeItem>)}
        </Fragment>
    );
};


export const Tree: React.FC<PropsTree> = ({files, selFile}) => {
  const classes = useStyles();
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <FileTreeItem selFile={selFile} items={files}></FileTreeItem>
    </TreeView>
  );
}