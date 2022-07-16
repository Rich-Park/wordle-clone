import { useState, useEffect, createContext } from "react";

// Component imports
import Header from "./components/Header/Header";
import Grid from "./components/Grid/Grid";
import Keyboard from "./components/Keyboard/Keyboard";
import GameOver from "./components/GameOver/GameOver";

// Style imports
import "./App.scss";

import { EmptyGrid, generateWordSet } from "./startingGrid";

export const AppContext = createContext();

function App() {
  const [grid, setGrid] = useState(EmptyGrid);
  const [curGuess, setCurGuess] = useState({ row: 0, col: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [randomWord, setRandomWord] = useState("");
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  // GET WORDSET and set random word
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setRandomWord(words.randomWord.toUpperCase());
    });
  }, []);

  // ENTER GUESS
  const onEnter = () => {
    if (curGuess.col === 5) {
      let curWord = "";
      for (let i = 0; i < 5; i++) {
        curWord += grid[curGuess.row][i];
      }

      // check if valid word
      if (wordSet.has(curWord.toLowerCase())) {
        setCurGuess({ row: curGuess.row + 1, col: 0 });
      } else {
        alert("Must input valid word!");
      }

      // check for game over
      if (curWord === randomWord) {
        setGameOver({ gameOver: true, guessedWord: true });
        return;
      }

      // ran out of guesses
      if (curGuess.row === 5) {
        setGameOver({ gameOver: true, guessedWord: false });
      }
    } else {
      alert("Must have five letters!");
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
          randomWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
          setGameOver,
        }}
      >
        <div className="game">
          <Grid />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
