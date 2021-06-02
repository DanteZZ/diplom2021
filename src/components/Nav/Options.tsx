import React, { Fragment } from "react";

/* КОМПОНЕНТЫ */

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Labels } from "../../enums";

type NavOptions = {
  open: boolean;
  closeHandler: () => {};
};

export const NavOptions: React.FC<NavOptions> = ({ open, closeHandler }) => {
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
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
          <input type="file"></input>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeHandler} color="primary" autoFocus>
            {Labels.Apply}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
