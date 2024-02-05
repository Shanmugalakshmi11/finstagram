// Navigationbar.js
import React from "react";
import styles from "./Navigationbar.module.css";
import finstergram from "./images/finstergram.png";

function Navigationbar() {
  return (
    <nav className="navbar">
      <div id="text-left">
        <a href="/">
          {" "}
          <img src={finstergram} alt="Home" />{" "}
        </a>
      </div>
      <div id="text-right">
        <a href="/login">Login</a>
        &nbsp;
        <a href="/signup">Signup</a>
      </div>
    </nav>
  );
}

export default Navigationbar;
