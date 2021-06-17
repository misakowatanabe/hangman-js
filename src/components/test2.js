import React from "react";

export default function Message(props) {
  if (props.count < 1) {
    return (
      <div>
        <div className="loseMessage">GAME OVER</div>
        <div className="correctWordContainer">
          <p>Correct word is: {props.secretWord}</p>
        </div>
      </div>
    ) };
  if (props.maskedWord.includes("_") || !props.secretWord)
    return <div className="winMessage">You won!</div>;
};
