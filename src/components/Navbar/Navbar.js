import React from "react";
import "./Navbar.css";

const Navbar = function(props) {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="col-md-4">
          <p className="nav-item">
            SCORE: <span>5</span>
          </p>
        </div>
        <div className="col-md-4">
          <p className="nav-item">
            <span>You guessed correctly!</span>
          </p>
        </div>
        <div className="col-md-4">
          <p className="nav-item">
            TOP SCORE: <span>10</span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
