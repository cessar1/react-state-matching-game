import React from "react";

import Button from "../Button";
import TileSelector from "../TileSelector";

const OptionsPanel = ({ numTiles, playing, startGame }) => (
  <div>
    <TileSelector numTiles={numTiles} />
    <Button playin={playing} startGame={startGame} />
  </div>
);

export default OptionsPanel;
