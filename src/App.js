import { useState, createContext } from "react";

// Component Imports
import Header from "./components/Header/Header";
import Grid from "./components/Grid/Grid";
import Keyboard from "./components/Keyboard/Keyboard";

import "./App.scss";

import { GridStart } from "./startingGrid";

export const AppContext = createContext();

function App() {
  const [grid, setGrid] = useState(GridStart);
  const [curGuess, setCurGuess] = useState({ row: 0, col: 0 });

  return (
    <div className="app">
      <Header />

      <AppContext.Provider value={{ grid, setGrid, curGuess, setCurGuess }}>
        <div className="game">
          <Grid />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
