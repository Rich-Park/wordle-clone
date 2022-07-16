import { useState, createContext } from "react";

// Component imports
import Header from "./components/Header/Header";
import Grid from "./components/Grid/Grid";
import Keyboard from "./components/Keyboard/Keyboard";

// Style imports
import "./App.scss";

import { EmptyGrid } from "./startingGrid";

export const AppContext = createContext();

function App() {
  const [grid, setGrid] = useState(EmptyGrid);
  const [curGuess, setCurGuess] = useState({ row: 0, col: 0 });

  const CORRECT_WORD = "RIGHT";

  // ENTER GUESS
  const onEnter = () => {
    if (curGuess.col === 5) {
      setCurGuess({ row: curGuess.row + 1, col: 0 });
    } else {
      alert("Must input valid word!");
    }
  };

  // DELETE LETTER
  const deleteLetter = () => {
    if (curGuess.col === 0) {
      alert("Cannot delete nothing!");
    } else {
      const newGrid = [...grid];
      newGrid[curGuess.row][curGuess.col - 1] = "";
      setGrid(newGrid);
      setCurGuess({ ...curGuess, col: curGuess.col - 1 });
    }
  };

  // SELECT LETTER
  const selectLetter = (keyVal) => {
    if (curGuess.col <= 4) {
      const newGrid = [...grid];
      newGrid[curGuess.row][curGuess.col] = keyVal;
      setGrid(newGrid);
      setCurGuess({ ...curGuess, col: curGuess.col + 1 });
    }
  };

  return (
    <div className="app">
      <Header />

      <AppContext.Provider
        value={{
          grid,
          setGrid,
          curGuess,
          setCurGuess,
          selectLetter,
          deleteLetter,
          onEnter,
          CORRECT_WORD,
        }}
      >
        <div className="game">
          <Grid />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
