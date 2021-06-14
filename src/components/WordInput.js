import React from "react";
import TextField from "@material-ui/core/TextField";
import InputSubmitButton from "./InputSubmitButton";

export default function WordInput(props) {
  return (
    <form noValidate autoComplete="off" onSubmit={props.handleSubmit}>
      <TextField
        id="outlined-basic"
        placeholder="Type in a word..."
        variant="outlined"
        name="letter"
        value={props.newWord || ""}
        onChange={props.handleChange}
      />
      <div className="errorMessageContainer">
        <div className="errorMessage">{props.errorMessage}</div>
      </div>
      <InputSubmitButton>Start</InputSubmitButton>
    </form>
  );
}
