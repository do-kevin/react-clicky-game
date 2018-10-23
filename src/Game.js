import React, { Component } from "react";
import {Howl, Howler} from "howler";
import Navbar from "./components/Jumbotron";
import Jumbotron from "./components/Navbar";
import Box from "./components/Box";
import pokemon from "./pokemon.json";
import "./Game.css";

class Game extends Component {
  state = {
    pokemon,
    continueOrGameOver: "",
    previousPokemon: [],
    wins: 0,
    score: 0,
    count: 0,
    result: ""
  };

  select = new Howl({
    src: ["../assets/audio/select.wav"]
  });

  lose = new Howl({
    src: ["../assets/audio/lose.wav"]
  });

  win = new Howl({
    src: ["../assets/audio/win.wav"]
  });
  

  shufflePokemon = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  clickPokemon = event => {
    this.setState({
      previousPokemon: this.state.previousPokemon.concat(event.target.alt)
    });

    this.select.play();

    if (!(this.state.previousPokemon.includes(event.target.alt))) {
      this.setState({ score: this.state.score + 1, result: "You guessed correctly" });
      if (this.state.score === 11) { // Updates after score is 11
        this.setState({ score: 0, wins: this.state.wins + 1, result: "You win!" });
        console.log(this.state.wins);
        this.win.play();
        console.log("You won");
      }
    } else if (this.state.previousPokemon.includes(event.target.alt)) {
      this.setState({ score: 0, previousPokemon: [], result: "You lost. Try again" });
      this.lose.stop();
      this.lose.play();
      console.log("You lost");
    }

    this.setState({ position: this.shufflePokemon(this.state.pokemon) });

    console.log(event.target.alt)
    console.log(this.state.previousPokemon);
    console.log(this.state.score);
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          result={this.state.result}
          wins={this.state.wins}
        />
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
