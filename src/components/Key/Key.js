import { useContext } from "react";
import { AppContext } from "../../App";

// Style imports
import "./Key.scss";

import React from "react";

const Key = ({ keyVal, bigKey }) => {
  const { onSelectLetter, onDeleteLetter, onEnter } = useContext(AppContext);

  // Clicking on keyboard
  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDeleteLetter();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
};

export default Key;
