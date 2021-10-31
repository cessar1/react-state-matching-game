import React from "react";
import "./Button.css";

const Button = ({ playing, startGame }) => (
  <button playing={playing} onClick={startGame}>
    {playing ? "reset" : "start"}
  </button>
);

export default Button;
