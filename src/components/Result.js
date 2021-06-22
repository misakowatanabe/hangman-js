import React from "react";
import RetryButton from "./RetryButton";

export default function Result(props) {
  if (props.count < 1) {
    return (
      <div>
        <div>
          <div className="loseMessage">GAME OVER</div>
          <div className="correctWordContainer">
            <p>Correct word is: {props.secretWord}</p>
          </div>
        </div>
        <RetryButton handleRetry={props.handleRetry} />
      </div>
    );
  } else if (!props.maskedWord.includes("_") && props.secretWord) {
    return (
      <div>
        <div className="winMessage">You won!</div>
        <RetryButton handleRetry={props.handleRetry} />
      </div>
    );
  } else return null;
}
