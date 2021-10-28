import React from "react";
import Tile from "../Tile";
import "./Board.css";

const Board = (props) => {
  const tileGrid = props.tiles.map((tile) => {
    <Tiles {...tile} />;
  });
  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  };

  return (
    <div className='Board' style={gridConfig}>
      {tileGrid}
    </div>
  );
};

export default Board;
