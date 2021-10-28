import React from "react";

import "./Tile.css";

const Tile = ({ selected, matched, color, svg: Svg }) => {
  const tileColor = selected || matched ? { backGroundColor: color } : null;
  return (
    <div className='Tile' style={tileColor}>
      {selected || matched ? <Svg /> : null}
    </div>
  );
};

export default Tile;
