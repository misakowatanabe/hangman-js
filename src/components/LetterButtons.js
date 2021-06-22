import React from "react";
import Button from "@material-ui/core/Button";

export default function LetterButtons(props) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split("");

  const letterButtons = alphabet.map((letter, index) => (
    <Button
      key={index}
      disabled={
        props.wrongGuesses.includes(letter) || props.correctGuesses.includes(letter)
      }
      onClick={() => {
        if (props.secretWord.includes(letter)) {
          props.setCorrectGuesses([...props.correctGuesses, letter]);
        } else {
          props.setCount(props.count - 1);
          props.setWrongGuesses([...props.wrongGuesses, letter]);
        }
      }}
      variant="contained"
      color="primary"
      className="letterButton"
    >
      <div>{letter}</div>
    </Button>
  ));

  return letterButtons;
}
