import React from "react";

const GameModeSelect = ({ selectMode }) => (
  <div>
    <button onClick={() => selectMode("hc")}>Human Vs Computer</button>
    <button onClick={() => selectMode("cc")}>Computer Vs Computer</button>
  </div>
);

export default GameModeSelect;
