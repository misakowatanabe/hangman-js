import React from "react";
import Output from "./Output";
import LetterButtons from "./LetterButtons";

export default function Game(props) {
  if (props.count >= 0 && props.secretWord) {
    return (
      <div>
        <Output
          maskedWord={props.maskedWord}
          count={props.count}
          hangman={props.hangman}
        />
        {!props.maskedWord.includes("_") || !props.count > 0 ? null : (
          <div className="letterButtonsContainer">
            <LetterButtons
              correctGuesses={props.correctGuesses}
              setCorrectGuesses={props.setCorrectGuesses}
              wrongGuesses={props.wrongGuesses}
              setWrongGuesses={props.setWrongGuesses}
              count={props.count}
              setCount={props.setCount}
              secretWord={props.secretWord}
            />
          </div>
        )}
      </div>
    );
  } else return null;
}
