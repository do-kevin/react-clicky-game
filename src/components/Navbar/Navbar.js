import React from "react";
import "./Navbar.css";

const Navbar = function(props) {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="col-md-4">
          <p className="nav-item">
            SCORE: <span>{props.score}</span>
          </p>
        </div>
        <div className="col-md-4">
          <p className="nav-item">
            <span>{props.result}</span>
          </p>
        </div>
        <div className="col-md-4">
          <p className="nav-item">
            WINS: <span>{props.wins}</span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
