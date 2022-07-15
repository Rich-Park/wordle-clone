// Component imports
import Key from "../Key/Key";

// Style imports
import "./Keyboard.scss";

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      <div className="line-top">
        {keys1.map((key) => {
          return <Key keyVal={key} key={`line-top-${key}`} />;
        })}
      </div>
      <div className="line-middle">
        {keys2.map((key) => {
          return <Key keyVal={key} key={`line-middle-${key}`} />;
        })}
      </div>
      <div className="line-bottom">
        <Key keyVal={"ENTER"} bigKey />
        {keys3.map((key) => {
          return <Key keyVal={key} key={`line-bottom-${key}`} />;
        })}
        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
