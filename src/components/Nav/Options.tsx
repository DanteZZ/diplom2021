import React, { Fragment, useContext } from "react";

/* КОМПОНЕНТЫ */

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

import { Labels } from "../../enums";
import AppContext from "../App/AppContext";

type NavOptions = {
  open: boolean;
  closeHandler: () => {};
};

export const NavOptions: React.FC<NavOptions> = ({ open, closeHandler }) => {
  const { updateConfigs, setTreeDir, treeDir } = useContext(AppContext);
  const saveHandler = (): void => {
    updateConfigs();
    closeHandler();
  };
  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={closeHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{Labels.Options}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Не меняйте данный путь без необходимости!!!
          </DialogContentText>
          <TextField
            id="outlined-basic"
            label={Labels.PathInput}
            fullWidth
            variant="outlined"
            value={treeDir}
            onChange={(e) => {
              setTreeDir(e.target.value);
            }}
          />
          <DialogContentText>
            Разработкой занимались: Олег Тагильцев, Пётр Маршал
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={saveHandler} color="primary" autoFocus>
            {Labels.Save}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
