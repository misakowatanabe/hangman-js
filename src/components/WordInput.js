import React from "react";
import TextField from "@material-ui/core/TextField";
import InputSubmitButton from "./InputSubmitButton";

export default function WordInput(props) {
  const handleInputChange = (e) => {
    e.preventDefault();
    props.setLetters(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.letters === "") {
      props.setErrorMessage("Please type in a word to start the game");
    } else if (props.letters.match(/[^A-Za-zÅÄÖåäö]/)) {
      props.setErrorMessage("Please type in a word using only A-Ö");
    } else {
      props.setSecretWord(props.letters.toUpperCase());
    }
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        placeholder="Type in a word..."
        variant="outlined"
        name="letter"
        value={props.letters || ""}
        onChange={handleInputChange}
      />
      <div className="errorMessageContainer">
        <div className="errorMessage">{props.errorMessage}</div>
      </div>
      <InputSubmitButton>Start</InputSubmitButton>
    </form>
  );
}
