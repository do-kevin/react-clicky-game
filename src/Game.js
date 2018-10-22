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

  choosePokemon = id => {
    console.log(id);
    const pokemon = this.state.pokemon.filter(monster => monster.id !== id);
    this.setState({ pokemon });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <main>
          <section className="container">
          {this.state.pokemon.map(function(monster) {
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
                // choosePokemon={this.choosePokemon}
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
