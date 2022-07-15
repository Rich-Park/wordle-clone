import { useContext } from "react";
import { AppContext } from "../../App";

// Style imports
import "./Key.scss";

import React from "react";

const Key = ({ keyVal, bigKey }) => {
  const { grid, setGrid, curGuess, setCurGuess } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER" && curGuess.col === 5) {
      setCurGuess({ row: curGuess.row + 1, col: 0 });
    } else {
      // can only input letters if position is 0 to 4
      if (keyVal === "ENTER") return;
      if (curGuess.col <= 4) {
        const newGrid = [...grid];
        newGrid[curGuess.row][curGuess.col] = keyVal;
        setGrid(newGrid);
        setCurGuess({ ...curGuess, col: curGuess.col + 1 });
      }
    }
  };

  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
};

export default Key;
