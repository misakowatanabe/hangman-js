import { useState, useEffect } from "react";
import "./style/App.css";
import Intro from "./components/Intro";
import Game from "./components/Game";
import Footer from "./components/Footer";
import Result from "./components/Result";
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
  const [errorMessage, setErrorMessage] = useState("");
  const [secretWord, setSecretWord] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [count, setCount] = useState(10);
  const [hangman, setHangman] = useState(hangman0);

  const maskedWord = secretWord
    .split("")
    .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
    .join(" ");

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
      <Intro
        letters={letters}
        setLetters={setLetters}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        secretWord={secretWord}
        setSecretWord={setSecretWord}
      />
      <Game
        count={count}
        setCount={setCount}
        correctGuesses={correctGuesses}
        setCorrectGuesses={setCorrectGuesses}
        wrongGuesses={wrongGuesses}
        setWrongGuesses={setWrongGuesses}
        secretWord={secretWord}
        maskedWord={maskedWord}
        hangman={hangman}
      />
      <Result
        count={count}
        secretWord={secretWord}
        maskedWord={maskedWord}
        handleRetry={handleRetry}
      />
      <Footer />
    </div>
  );
}

export default App;
