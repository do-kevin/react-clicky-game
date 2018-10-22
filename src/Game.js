import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron/";
import Score from "./components/Score";
import pokemons from "./pokemons.json";

const Game = function() {
  return (
    <div>
      <Score />
      <Jumbotron />
    </div>
  );
};
// 
export default Game;
