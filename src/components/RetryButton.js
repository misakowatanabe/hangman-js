import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ReplayIcon from "@material-ui/icons/Replay";

const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      margin: "30px 0px 150px 0px",
      padding: "16px 35px 16px 29px",
      borderRadius: "30px",
    },
  },
}));

export default function RetryButton(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button onClick={props.handleRetry} type="submit" variant="contained">
        <ReplayIcon className="retryIcon" />
        Try again
      </Button>
    </div>
  );
}
