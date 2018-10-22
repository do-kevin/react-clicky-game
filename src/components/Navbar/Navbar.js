import React from "react";
import "./Navbar.css";

const Navbar = function(props) {
  return (
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="col-md-4">
          <p class="nav-item">
            SCORE: <span>5</span>
          </p>
        </div>
        <div class="col-md-4">
          <p class="nav-item">
            <span>You guessed correctly!</span>
          </p>
        </div>
        <div class="col-md-4">
          <p class="nav-item">
            TOP SCORE: <span>10</span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
