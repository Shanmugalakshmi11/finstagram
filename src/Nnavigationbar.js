// Navigationbar.js

import React from 'react';
import finstergram from '.images/finstergram.png';
import './App.css'; // Import the styles

function Navigationbar() {
  return (
    <nav className="navbar">
      <a href="index.html"> <img src={finstergram} alt="Home" /> </a>
        <div id="text-right">
    <a href="login.html">Login</a>
    <a href="signup.html">Signup</a>
    
  </div>
    </nav>
  );
}

export default Navigationbar;
