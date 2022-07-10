// Style imports
import "./Line.scss";

const GUESS_LENGTH = 5;

const Line = ({ guess }) => {
  const tiles = [];
  for (let i = 0; i < GUESS_LENGTH; i++) {
    const ch = guess[i];
    tiles.push(<div className="tile">{ch}</div>);
  }

  return <div className="line">{tiles}</div>;
};

export default Line;
