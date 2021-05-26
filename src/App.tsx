import { AppBar, Grid, IconButton, Paper, Theme, Toolbar, Typography} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import SettingsIcon from '@material-ui/icons/Settings'
import { makeStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import './App.css';
import Labels from './labels';
import {Tree} from "./components/Tree";
import { Viewer } from "./components/Viewer";
import {FileTypes,IFileTree} from "./interfaces";
import { useState } from 'react';

import { getFiles, getConfig} from "./fs";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    height:"100%"
  },
  menuLabel: {
    flexGrow:1,
    height:"100%"
  },
  container: {
    padding:"82px 16px 0px 16px",
    height:"100%",
    width:"100%"
  },
  paper: {
    padding: "1em"
  },
  treeWrapper: {
    flexGrow:1,
    overflow:"auto",
  },
  item: {
    height:"100%",
    display:"flex",
    flexDirection:"column"
  }
}))

const App: React.FC = () => {
  const [configs,setConfigs] = useState({
    path: ""
  })

  const [Files,setFiles] = useState<IFileTree[]>([]);

  const [selFile, setSelFile] = useState<IFileTree | null>(null);

  const updateConfigs = () : void => {
    let res = getConfig();
    setConfigs({...configs,path:res.path});
  };

  const selectFile = (file:IFileTree) : void => {
    setSelFile(file);
  }

  
  useEffect(()=>{
    setTimeout(()=>{
      setFiles(getFiles(configs.path));
    },200);
  },[configs]);

  useEffect(()=>{
    updateConfigs();
  },[]);

  
  const classes = useStyles();
  return (
    <div className={classes.menuLabel}>
      <AppBar>
        <Toolbar>
          <Typography className={classes.menuLabel} variant="h6">
            {Labels.SiteName}
          </Typography>
          <IconButton>
            <SettingsIcon></SettingsIcon>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={3} className={classes.item}>
          <h3>Список</h3>
          <div className={classes.treeWrapper}>
            {Files.length ? <Tree files={Files} selFile={selectFile}></Tree> : <Alert severity="info">Загрузка файлов</Alert>}
          </div>
          
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Viewer file={selFile}></Viewer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
