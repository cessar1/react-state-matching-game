import React from "react";

import "./Tile.css";

const Tile = (props) => {
  const dynamicColor =
    props.selected || props.matched ? { backGroundColor: props.color } : null;
  return (
    <div className='Tile' style={dynamicColor}>
      {props.selected || props.matched ? <props.svg /> : null}
    </div>
  );
};

export default Tile;
