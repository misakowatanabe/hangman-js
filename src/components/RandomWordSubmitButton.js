import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles(() => ({
  rootInput: {
    "& > *": {
      margin: "10px 0px 140px 0px",
      padding: "16px 23px 16px 35px",
      borderRadius: "30px",
    },
  },
}));

export default function RandomWordSubmitButton(props) {
  const classes = useStyles();
  return (
    <div className={classes.rootInput}>
      <Button
        onClick={props.handleSubmitRandomWord}
        type="submit"
        variant="contained"
        color="primary"
      >
        Random Word
        <KeyboardArrowRightIcon className="arrowIcon" />
      </Button>
    </div>
  );
}
