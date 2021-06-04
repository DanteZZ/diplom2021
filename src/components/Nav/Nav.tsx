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
import Logo from "../../assets/images/logo.png";

const useStyles = makeStyles((theme: Theme) => ({
  menuLabel: {
    flexGrow: 1,
    height: "100%",
    paddingLeft: "16px",
  },
  white: {
    color: "white",
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
      <AppBar className={classes.white}>
        <Toolbar>
          <img src={Logo} alt="" />
          <Typography className={classes.menuLabel} variant="h6">
            {Labels.SiteName}
          </Typography>
          <IconButton onClick={handleOptOpen}>
            <SettingsIcon className={classes.white}></SettingsIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <NavOptions open={optOpen} closeHandler={handleOptClose} />
    </Fragment>
  );
};
