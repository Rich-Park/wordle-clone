import { useCallback, useEffect, useContext } from "react";
import { AppContext } from "../../App";

// Component imports
import Key from "../Key/Key";

// Style imports
import "./Keyboard.scss";

const Keyboard = () => {
  const { onEnter, deleteLetter, selectLetter, disabledLetters } =
    useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  // TYPING LOGIC
  // eslint-disable-next-line
  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      deleteLetter();
    } else {
      // TODO: can't assume user enters valid letter
      keys1.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          selectLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          selectLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          selectLetter(key);
        }
      });
    }
  });

  // LISTEN FOR KEY EVENTS FROM USER
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  // RENDER KEYBOARD
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line-top">
        {keys1.map((key) => {
          return (
            <Key
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              key={`line-top-${key}`}
            />
          );
        })}
      </div>
      <div className="line-middle">
        <div className="spacer" />
        {keys2.map((key) => {
          return (
            <Key
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              key={`line-middle-${key}`}
            />
          );
        })}
        <div className="spacer" />
      </div>
      <div className="line-bottom">
        <Key keyVal={"ENTER"} bigKey />
        {keys3.map((key) => {
          return (
            <Key
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              key={`line-bottom-${key}`}
            />
          );
        })}
        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
