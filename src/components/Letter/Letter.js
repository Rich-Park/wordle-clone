import { useContext } from "react";

import { AppContext } from "../../App";

// Style imports
import "./Letter.scss";

const Letter = ({ curRow, letterPos }) => {
  const { grid } = useContext(AppContext);
  const letter = grid[curRow][letterPos];
  return <div className="letter">{letter}</div>;
};

export default Letter;
