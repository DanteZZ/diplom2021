import { AppBar, Button, Grid, IconButton, Paper, Theme, Toolbar, Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings'
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import './App.css';
import Labels from './labels';
import {Tree} from "./components/Tree";
import {FileTypes,FileTree} from "./interfaces";

const Files : FileTree[] = [{
  id:0,
  type:FileTypes.dir,
  title:"Уроки",
  childs:[
    {
      id:1,
      type:FileTypes.word,
      title:"Урок 1",
      path:"./lessons/Уроки/Урок 1.docx"
    }
  ]
}];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuLabel: {
    flexGrow:1
  },
  container: {
    padding:"82px 16px 0px 16px"
  },
  paper: {
    padding: "1em"
  }
}))

function App() {
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
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Tree files={Files}></Tree>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>Инфа</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
