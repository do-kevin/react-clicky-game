(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,alt:"Pikachu",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"},{id:2,alt:"Eevee",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"},{id:3,alt:"Mewtwo",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"},{id:4,alt:"Snorlax",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"},{id:5,alt:"Bulbasaur",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"},{id:6,alt:"Mew",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"},{id:7,alt:"Psyduck",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"},{id:8,alt:"Gengar",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"},{id:9,alt:"Dragonite",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"},{id:10,alt:"Charmander",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"},{id:11,alt:"Magikarp",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png"},{id:12,alt:"Squirtle",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"}]},,,function(e,t,s){e.exports=s(22)},,,,,function(e,t,s){},,function(e,t,s){},,function(e,t,s){},,function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),o=s(2),c=s.n(o),l=s(3),m=s(4),r=s(7),i=s(5),p=s(8),u=(s(14),function(){return n.a.createElement("div",{className:"jumbotron"},n.a.createElement("h1",null,"Remember Those Pokemons!"),n.a.createElement("h2",null,"Click on a Pokemon, but remember to not click on the same Pokemon twice!"))}),d=(s(16),function(e){return n.a.createElement("nav",{class:"navbar navbar-default navbar-fixed-top"},n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"col-md-4"},n.a.createElement("p",{class:"nav-item"},"SCORE: ",n.a.createElement("span",null,"5"))),n.a.createElement("div",{class:"col-md-4"},n.a.createElement("p",{class:"nav-item"},n.a.createElement("span",null,"You guessed correctly!"))),n.a.createElement("div",{class:"col-md-4"},n.a.createElement("p",{class:"nav-item"},"TOP SCORE: ",n.a.createElement("span",null,"10")))))}),k=(s(18),function(e){return console.log("hit"),console.log(e),n.a.createElement("img",{className:"box",id:e.id,key:e.id,src:e.src,alt:e.alt})}),g=s(6),f=(s(20),function(e){function t(){var e,s;Object(l.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(s=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(n)))).state={pokemon:g},s.choosePokemon=function(e){console.log(e);var t=s.state.pokemon.filter(function(t){return t.id!==e});s.setState({pokemon:t})},s}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(u,null),n.a.createElement(d,null),n.a.createElement("main",null,n.a.createElement("section",{className:"container"},this.state.pokemon.map(function(e){return console.log("================="),console.log(e.id),console.log(e.src),console.log(e.name),n.a.createElement(k,{id:e.id,key:e.id,src:e.src,alt:e.alt})}))))}}]),t}(a.Component));c.a.render(n.a.createElement(f,null),document.querySelector("#root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.68760740.chunk.js.map