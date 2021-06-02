import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Theme,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { makeStyles } from "@material-ui/styles";
import Labels from "../../labels";

const useStyles = makeStyles((theme: Theme) => ({
  menuLabel: {
    flexGrow: 1,
    height: "100%",
  },
}));

export const Nav: React.FC = () => {
  const classes = useStyles();
  return (
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
  );
};
