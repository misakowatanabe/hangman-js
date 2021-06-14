import { useState, useEffect } from "react";
import "./style/App.css";
import WordInput from "./components/WordInput";
import WinMessage from "./components/WinMessage";
import LoseMessage from "./components/LoseMessage";
import OutputGrid from "./components/OutputGrid";
import Button from "@material-ui/core/Button";
import hangman0 from "./img/hangman0.png";
import hangman1 from "./img/hangman1.png";
import hangman2 from "./img/hangman2.png";
import hangman3 from "./img/hangman3.png";
import hangman4 from "./img/hangman4.png";
import hangman5 from "./img/hangman5.png";
import hangman6 from "./img/hangman6.png";
import hangman7 from "./img/hangman7.png";
import hangman8 from "./img/hangman8.png";
import hangman9 from "./img/hangman9.png";
import hangman10 from "./img/hangman10.png";

function App() {
  const [letters, setLetters] = useState("");
  const handleInputChange = (e) => {
    e.preventDefault();
    setLetters(e.target.value);
  };

  const [errorMessage, setErrorMessage] = useState("");
  const [secretWord, setSecretWord] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (letters === "") {
      setErrorMessage("Please type in a word to start the game");
    } else if (letters.match(/[^A-Za-zÅÄÖåäö]/)) {
      setErrorMessage("Please type in a word using only A-Ö");
    } else {
      setSecretWord(letters.toUpperCase());
    }
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split("");

  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const maskedWord = secretWord
    .split("")
    .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
    .join(" ");
  const letterButtons = alphabet.map((letter, index) => (
    <Button
      key={index}
      disabled={
        wrongGuesses.includes(letter) || correctGuesses.includes(letter)
      }
      onClick={() => {
        if (secretWord.includes(letter)) {
          setCorrectGuesses([...correctGuesses, letter]);
        } else {
          setCount(count - 1);
          setWrongGuesses([...wrongGuesses, letter]);
        }
      }}
      variant="contained"
      color="primary"
      className="letterButton"
    >
      <div>{letter}</div>
    </Button>
  ));

  const [count, setCount] = useState(10);
  const [hangman, setHangman] = useState(hangman0);
  useEffect(() => {
    if (count === 10) {
      setHangman(hangman0);
    } else if (count === 9) {
      setHangman(hangman1);
    } else if (count === 8) {
      setHangman(hangman2);
    } else if (count === 7) {
      setHangman(hangman3);
    } else if (count === 6) {
      setHangman(hangman4);
    } else if (count === 5) {
      setHangman(hangman5);
    } else if (count === 4) {
      setHangman(hangman6);
    } else if (count === 3) {
      setHangman(hangman7);
    } else if (count === 2) {
      setHangman(hangman8);
    } else if (count === 1) {
      setHangman(hangman9);
    } else if (count === 0) {
      setHangman(hangman10);
    }
  }, [count]);

  const handleRetry = (e) => {
    e.preventDefault();
    setLetters("");
    setErrorMessage("");
    setSecretWord("");
    setCorrectGuesses([]);
    setWrongGuesses([]);
    setCount(10);
    setHangman(hangman0);
  };

  return (
    <div className="mainContainer">
      <div className="mainText">Hangman</div>
      {secretWord === "" && (
        <div>
          <WordInput
            newWord={letters}
            handleChange={handleInputChange}
            handleSubmit={handleSubmit}
            errorMessage={errorMessage}
          />
        </div>
      )}
      {count >= 0 && secretWord && (
        <div>
          <OutputGrid maskedWord={maskedWord} count={count} hangman={hangman} />
          {!maskedWord.includes("_") || !count > 0 ? null : (
            <div className="letterButtonsContainer">{letterButtons}</div>
          )}
        </div>
      )}
      <div>
        {!count < 1 ? null : (
          <LoseMessage onClick={handleRetry} secretWord={secretWord} />
        )}
        {maskedWord.includes("_") || !secretWord ? null : (
          <WinMessage onClick={handleRetry} />
        )}
      </div>
      <footer>
        <p className="footer">
          Built by Misako{" "}
          <a href="https://github.com/misakowatanabe/hangman-js">
            https://github.com/misakowatanabe/hangman-js
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
