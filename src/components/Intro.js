import React from "react";
import WordInput from "./WordInput";
import RandomWordSubmitButton from "./RandomWordSubmitButton";

export default function Intro(props) {
  if (props.secretWord === "") {
    return (
      <div>
        <WordInput
          letters={props.letters}
          setLetters={props.setLetters}
          errorMessage={props.errorMessage}
          setErrorMessage={props.setErrorMessage}
          setSecretWord={props.setSecretWord}
        />
        <p className="randomWordGuide">
          Are you alone now? You can play with random words!
        </p>
        <RandomWordSubmitButton
          setSecretWord={props.setSecretWord}
        />
      </div>
    );
  } else return null;
}
