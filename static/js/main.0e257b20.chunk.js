(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,alt:"Pikachu",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"},{id:2,alt:"Eevee",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"},{id:3,alt:"Mewtwo",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"},{id:4,alt:"Snorlax",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"},{id:5,alt:"Bulbasaur",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"},{id:6,alt:"Mew",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"},{id:7,alt:"Psyduck",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"},{id:8,alt:"Gengar",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"},{id:9,alt:"Dragonite",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"},{id:10,alt:"Charmander",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"},{id:11,alt:"Magikarp",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png"},{id:12,alt:"Squirtle",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"}]},,,function(e,t,s){e.exports=s(22)},,,,,function(e,t,s){},,function(e,t,s){},,function(e,t,s){},,function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var a=s(0),o=s.n(a),n=s(2),c=s.n(n),l=s(3),m=s(4),r=s(7),i=s(5),p=s(8),u=(s(14),function(){return o.a.createElement("div",{className:"jumbotron"},o.a.createElement("h1",null,"Remember Those Pokemons!"),o.a.createElement("h2",null,"Click on a Pokemon, but remember to not click on the same Pokemon twice!"))}),k=(s(16),function(e){return o.a.createElement("nav",{className:"navbar navbar-default navbar-fixed-top"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("p",{className:"nav-item"},"SCORE: ",o.a.createElement("span",null,"5"))),o.a.createElement("div",{className:"col-md-4"},o.a.createElement("p",{className:"nav-item"},o.a.createElement("span",null,"You guessed correctly!"))),o.a.createElement("div",{className:"col-md-4"},o.a.createElement("p",{className:"nav-item"},"TOP SCORE: ",o.a.createElement("span",null,"10")))))}),d=(s(18),function(e){return o.a.createElement("img",{className:"box animated zoomIn delay-1.5s",id:e.id,key:e.id,src:e.src,alt:e.alt,onClick:e.clickPokemon})}),g=s(6),f=(s(20),function(e){function t(){var e,s;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return(s=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={pokemon:g,position:[],continueOrGameOver:"",previousPokemon:"",wins:0,score:0,count:0},s.shufflePokemon=function(e){for(var t=e.length-1;t>0;t--){var s=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[s],e[s]=a}return e},s.clickPokemon=function(e){0===s.state.score&&s.setState({previousPokemon:e.target.alt}),console.log(e.target.alt),console.log(s.state.previousPokemon),e.target.alt!==s.state.previousPokemon&&s.setState({score:s.state.score+1}),e.target.alt===s.state.previousPokemon&&console.log("Pokemon matched"),console.log("hit"),s.setState({position:s.shufflePokemon(s.state.pokemon)}),12===s.state.score&&(s.setState({score:0,wins:s.state.wins+1}),console.log("Wins: ".concat(s.state.wins))),console.log(s.state.score)},s}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(u,null),o.a.createElement(k,null),o.a.createElement("main",null,o.a.createElement("section",{className:"container"},this.state.pokemon.map(function(t){return o.a.createElement(d,{id:t.id,key:t.id,src:t.src,alt:t.alt,position:e.state.pokemon.indexOf(t)+1,clickPokemon:e.clickPokemon})}))))}}]),t}(a.Component));c.a.render(o.a.createElement(f,null),document.querySelector("#root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.0e257b20.chunk.js.map