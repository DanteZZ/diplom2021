import React, { useEffect, useState } from "react";
import { Grid, Paper, Theme } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import tgreen from "@material-ui/core/colors/green";

import { Tree } from "../Tree/Tree";
import { Viewer } from "../Viewer/Viewer";
import { Nav } from "../Nav/Nav";

import { getFiles, getConfig, getWordFile, updateConfig } from "../../libs/fs";
import { IFileTree } from "../../interfaces";
import { FileTypes, Labels } from "../../enums";
import AppContext from "./AppContext";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: tgreen[500],
    },
    secondary: {
      main: tgreen[500],
    },
  },
});

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
  },
  menuLabel: {
    flexGrow: 1,
    height: "100%",
  },
  container: {
    padding: "82px 16px 0px 16px",
    height: "100%",
    width: "100%",
  },
  paper: {
    padding: "1em",
  },
  treeWrapper: {
    flexGrow: 1,
    overflow: "auto",
  },
  item: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  wrapperViewer: {
    height: "100%",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mt0: {
    marginTop: 0,
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  const [configLoaded, setConfigLoaded] = useState(false);
  const [treeDir, setTreeDir] = useState("");
  const [selFile, setSelFile] =
    useState<IFileTree | null | undefined>(undefined);
  const [Files, setFiles] = useState<IFileTree[]>([]);

  const reloadConfigs = (): void => {
    setConfigLoaded(false);
    setTimeout(() => {
      let res = getConfig();
      if (res) {
        setTreeDir(res.path);
      }
      setConfigLoaded(true);
    }, 100);
  };

  const updateConfigs = (): void => {
    updateConfig({ path: treeDir });
    reloadConfigs();
  };

  const selectFile = (file: IFileTree): void => {
    if (file.type === FileTypes.word) {
      setSelFile(null);
      getWordFile(file.path, (_path: string): void => {
        file.path = _path;
        setTimeout(() => {
          setSelFile(file);
        }, 100);
      });
    } else {
      setSelFile(file);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (treeDir !== "") {
        setFiles(getFiles(treeDir));
      }
    }, 200);
  }, [configLoaded]);

  useEffect(() => {
    reloadConfigs();
  }, []);

  return (
    <AppContext.Provider value={{ updateConfigs, setTreeDir, treeDir }}>
      <ThemeProvider theme={theme}>
        <div className={classes.menuLabel}>
          <Nav />
          <Grid container spacing={3} className={classes.container}>
            <Grid item xs={3} className={classes.item}>
              <h3 className={classes.mt0}>{Labels.TreeTitle}</h3>
              <div className={classes.treeWrapper}>
                {Files.length ? (
                  <Tree files={Files} selFile={selectFile}></Tree>
                ) : (
                  <Alert severity="info">{Labels.TreeLoading}</Alert>
                )}
              </div>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.wrapperViewer}>
                <Viewer file={selFile}></Viewer>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
