import React from "react";
import trollface from "../assets/trollFace.svg"

export function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <img src={trollface} alt=""/>
        <span>Meme Generator</span>
      </div>
      <div className="header-text">
        <span>React Course - Project 3</span>
      </div>
    </header>
  );
}
