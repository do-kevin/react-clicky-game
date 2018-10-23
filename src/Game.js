import React, { Component } from "react";
import Navbar from "./components/Jumbotron";
import Jumbotron from "./components/Navbar";
import Box from "./components/Box";
import pokemon from "./pokemon.json";
import "./Game.css"

class Game extends Component {
  state = {
    pokemon,
    position: [],
    continueOrGameOver: "",
    wins: 0,
    count: 0
  };

  shufflePokemon = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    // console.log('bam')
    // console.log(array);
    return array;
  }

  clickPokemon = (event) => {
    console.log(event.target.id);
    console.log("hit");
    this.setState({ position: this.shufflePokemon(this.state.pokemon)})
    console.log(this.state.pokemon);
    console.log(this.state.position);
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
