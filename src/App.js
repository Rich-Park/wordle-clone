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

  return (
    <div className="app">
      <Header />

      <AppContext.Provider value={{ grid, setGrid }}>
        <div className="game">
          <Grid />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
