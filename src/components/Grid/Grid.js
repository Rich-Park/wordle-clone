// import { useState } from "react";

// Component Imports
import Letter from "../Letter/Letter";

// Style imports
import "./Grid.scss";

const Grid = () => {
  return (
    <div className="grid">
      <div className="row">
        <Letter curRow={0} letterPos={0} />
        <Letter curRow={0} letterPos={1} />
        <Letter curRow={0} letterPos={2} />
        <Letter curRow={0} letterPos={3} />
        <Letter curRow={0} letterPos={4} />
      </div>
      <div className="row">
        <Letter curRow={1} letterPos={0} />
        <Letter curRow={1} letterPos={1} />
        <Letter curRow={1} letterPos={2} />
        <Letter curRow={1} letterPos={3} />
        <Letter curRow={1} letterPos={4} />
      </div>
      <div className="row">
        <Letter curRow={2} letterPos={0} />
        <Letter curRow={2} letterPos={1} />
        <Letter curRow={2} letterPos={2} />
        <Letter curRow={2} letterPos={3} />
        <Letter curRow={2} letterPos={4} />
      </div>
      <div className="row">
        <Letter curRow={3} letterPos={0} />
        <Letter curRow={3} letterPos={1} />
        <Letter curRow={3} letterPos={2} />
        <Letter curRow={3} letterPos={3} />
        <Letter curRow={3} letterPos={4} />
      </div>
      <div className="row">
        <Letter curRow={4} letterPos={0} />
        <Letter curRow={4} letterPos={1} />
        <Letter curRow={4} letterPos={2} />
        <Letter curRow={4} letterPos={3} />
        <Letter curRow={4} letterPos={4} />
      </div>
      <div className="row">
        <Letter curRow={5} letterPos={0} />
        <Letter curRow={5} letterPos={1} />
        <Letter curRow={5} letterPos={2} />
        <Letter curRow={5} letterPos={3} />
        <Letter curRow={5} letterPos={4} />
      </div>
    </div>
  );
};

export default Grid;
