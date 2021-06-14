import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    textAlign: "left",
    marginLeft: "30px",
    marginRight: "26px",
  },
}));

export default function GridForOutput(props) {
  const classes = useStyles();

  return (
    <div className="gridContainer">
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
              <div className="secretWord">{props.maskedWord}</div>
              <div className="guessesLeft">Guesses Left: {props.count}</div>
          </Grid>
          <Grid item xs={6}>
              <img src={props.hangman} alt="Logo" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
