import { useContext } from "react";

import { AppContext } from "../../App";

// Style imports
import "./Letter.scss";

const Letter = ({ row, col }) => {
  const { grid, curGuess, CORRECT_WORD } = useContext(AppContext);
  const letter = grid[row][col];

  // COLOR STATES
  const correct = CORRECT_WORD[col] === letter;
  const almost = !correct && letter !== "" && CORRECT_WORD.includes(letter);

  let letterState = "";

  // only set letterState when curGuess.row > row
  // this only happens when user validly enters. Check App.js for implementation
  if (curGuess.row > row) {
    if (correct) {
      letterState = "correct";
    } else if (almost) {
      letterState = "almost";
    } else {
      letterState = "wrong";
    }
  }

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;
