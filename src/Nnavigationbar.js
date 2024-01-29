// Navigationbar.js

import React from 'react';
import './App.css'; // Import the styles
import finstergram from './images/finstergram.png';


function Navigationbar() {
  return (
    <nav className="navbar">
      <div id="text-left"><a href="index.html"> <img src={finstergram} alt="Home" /> </a></div>
        <div id="text-right">
    <button className="login-button">Login</button>&nbsp;
    <button className="login-button">Signup</button>
  </div>
    </nav>
  );
}

export default Navigationbar;
