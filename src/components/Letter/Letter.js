import { useContext } from "react";

import { AppContext } from "../../App";

// Style imports
import "./Letter.scss";

const Letter = ({ row, col }) => {
  const { grid } = useContext(AppContext);
  const letter = grid[row][col];
  return <div className="letter">{letter}</div>;
};

export default Letter;
