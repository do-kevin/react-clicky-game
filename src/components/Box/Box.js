import React from "react";
import "./Box.css";

const Box = function(props) {
    console.log('hit');
    console.log(props);
  return (
    <img
      className="box"
      id={props.id}
      key={props.id}
      src={props.src}
      alt={props.alt}
      // onClick={() => props.choosePokemon(props.id)}
    />
  );
};
//
export default Box;
