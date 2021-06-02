import React, { Fragment } from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { IFileTree } from "../../interfaces";
import { FileTypes, Labels } from "../../enums";

const useStyles = makeStyles(() => ({
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "8px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  loader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

type PropsViewer = {
  file?: IFileTree | null | undefined;
};

export const Viewer: React.FC<PropsViewer> = ({ file }) => {
  const classes = useStyles();
  if (file === undefined) {
    return null;
  } else {
    if (file === null) {
      return (
        <Fragment>
          <Typography variant="h5" component="h5">
            {Labels.DocLoading}...  
          </Typography>
          <CircularProgress />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          {file.type === FileTypes.word ? (
            <iframe
              title="iframe"
              className={classes.iframe}
              src={file.path}
            ></iframe>
          ) : (
            ""
          )}
          {file.type === FileTypes.pdf ? (
            <iframe
              title="iframe"
              className={classes.iframe}
              src={file.path}
            ></iframe>
          ) : (
            ""
          )}
          {file.type === FileTypes.html ? (
            <iframe
              title="iframe"
              className={classes.iframe}
              src={file.path}
            ></iframe>
          ) : (
            ""
          )}
          {file.type === FileTypes.video ? (
            <iframe
              title="iframe"
              className={classes.iframe}
              src={file.path}
            ></iframe>
          ) : (
            ""
          )}
          {file.type === FileTypes.audio ? (
            <iframe
              title="iframe"
              className={classes.iframe}
              src={file.path}
            ></iframe>
          ) : (
            ""
          )}
          {file.type === FileTypes.image ? (
            <iframe
              title="iframe"
              className={classes.iframe}
              src={file.path}
            ></iframe>
          ) : (
            ""
          )}
        </Fragment>
      );
    }
  }
};
