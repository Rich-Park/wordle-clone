import { useEffect, useContext } from "react";

import { AppContext } from "../../App";

// Style imports
import "./Letter.scss";

const Letter = ({ row, col }) => {
  const { grid, curGuess, randomWord, setDisabledLetters } =
    useContext(AppContext);
  const letter = grid[row][col];

  // COLOR STATES
  const correct = randomWord[col] === letter;
  const almost = !correct && letter !== "" && randomWord.includes(letter);

  // only set letterState when curGuess.row > row
  // this only happens when user validly enters a guess. Check App.js for implementation
  const letterState =
    curGuess.row > row && (correct ? "correct" : almost ? "almost" : "wrong");

  // update disabled letters
  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
    // eslint-disable-next-line
  }, [curGuess.row]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;
