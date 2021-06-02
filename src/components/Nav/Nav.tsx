import React, { Fragment } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Theme,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { makeStyles } from "@material-ui/styles";
import { Labels } from "../../enums";
import { NavOptions } from "./Options";

const useStyles = makeStyles((theme: Theme) => ({
  menuLabel: {
    flexGrow: 1,
    height: "100%",
  },
}));

export const Nav: React.FC = () => {
  const classes = useStyles();

  const [optOpen, setOptOpen] = React.useState(false);

  const handleOptOpen = () => {
    setOptOpen(true);
  };

  const handleOptClose = (): any => {
    setOptOpen(false);
  };

  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <Typography className={classes.menuLabel} variant="h6">
            {Labels.SiteName}
          </Typography>
          <IconButton onClick={handleOptOpen}>
            <SettingsIcon></SettingsIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <NavOptions open={optOpen} closeHandler={handleOptClose} />
    </Fragment>
  );
};
