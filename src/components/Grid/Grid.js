import { useState } from "react";

// Component Imports
import Line from "../Line/Line";

// Style imports
import "./Grid.scss";

const Grid = () => {
  // eslint-disable-next-line
  const [guesses, setGuesses] = useState(Array(6).fill(""));

  return (
    <div className="grid">
      {guesses.map((guess) => {
        return <Line guess={guess} />;
      })}
    </div>
  );
};

export default Grid;
