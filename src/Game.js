import React, { Component } from "react";
import Navbar from "./components/Jumbotron";
import Jumbotron from "./components/Navbar";
import Box from "./components/Box";
import pokemon from "./pokemon.json";
import "./Game.css"

class Game extends Component {
  state = {
    pokemon
  };

  clickPokemon = () => {
    console.log("hit");
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <main>
          <section className="container">
          {this.state.pokemon.map(monster => {
            console.log("=================");
            console.log(monster.id);
            console.log(monster.src);
            console.log(monster.name);
            return (
              <Box
                id={monster.id}
                key={monster.id}
                src={monster.src}
                alt={monster.alt}
                clickPokemon={this.clickPokemon}
              />
            );
          })}
          </section>

        </main>
      </div>
    );
  }
}

export default Game;
