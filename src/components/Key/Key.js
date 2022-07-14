// Style imports
import "./Key.scss";

import React from "react";

const Key = ({ keyVal, bigKey }) => {
  return <div className={"key" + (bigKey ? " big" : "")}>{keyVal}</div>;
};

export default Key;
