import React from "react";
import Card from "./Card";

import './Game.css';

const Game = () => {
  return (
    <main id="main-content">
      <div class="container">
        Game Placeholder, here's a Card:
        <Card cost="3" title="Dwarf Stone Sorcerer" imgsrc="https://i.imgur.com/B3Q23lp.png" description="Dwarf Stone Sorcerer is a card. Oh boy, is he ever. This is a description of what this card does. You want it to say something? You're not ready for it to say something!" value="5" />
      </div>
    </main>
  )
};

export default Game;
