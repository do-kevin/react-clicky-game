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
    previousPokemon: "",
    wins: 0,
    score: 0,
    count: 0,
   
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

    if (this.state.score === 0) {
      this.setState({ previousPokemon: event.target.alt});
    }

    console.log(event.target.alt);
    console.log(this.state.previousPokemon);
    
    if (event.target.alt !== this.state.previousPokemon) {
      this.setState({ score: this.state.score + 1});
    }

    if (event.target.alt === this.state.previousPokemon) {
      console.log("Pokemon matched")
    }
    
    
   
    console.log("hit");
    // if (event.target.id === event.target.position + 1) {
    //   console.log("i guess");
    // }

    this.setState({ position: this.shufflePokemon(this.state.pokemon)})

    if (this.state.score === 12) {
      // player wins
      this.setState({ score: 0, wins: this.state.wins + 1 })
      console.log(`Wins: ${this.state.wins}`);
    }
    console.log(this.state.score);
    // console.log(this.state.pokemon);
    // console.log(this.state.position);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <main>
          <section className="container">
          {this.state.pokemon.map(monster => {
            // console.log("=================");
            // console.log(monster.id);
            // console.log(monster.src);
            // console.log(monster.name);
            return (
              <Box
                id={monster.id}
                key={monster.id}
                src={monster.src}
                alt={monster.alt}
                position={this.state.pokemon.indexOf(monster) + 1}
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
