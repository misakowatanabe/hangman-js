import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles(() => ({
  rootInput: {
    "& > *": {
      margin: "50px 0px",
      padding: "16px 23px 16px 35px",
      borderRadius: "30px",
    },
  },
}));

export default function InputSubmitButton() {
  const classes = useStyles();
  return (
    <div className={classes.rootInput}>
      <Button type="submit" variant="contained" color="primary">
        start
        <KeyboardArrowRightIcon className="arrowIcon" />
      </Button>
    </div>
  );
}
