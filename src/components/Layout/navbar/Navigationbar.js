// Navigationbar.js
import React, { useState } from "react";
import styles from "./Navigationbar.module.css";
import finstergram from "./images/finstergram.png";
import Login from "./Login/Login";

function Navigationbar() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
  };

  return (
    <nav className="navbar">
      <div id="text-left">
        <a href="index.html">
          {" "}
          <img src={finstergram} alt="Home" />{" "}
        </a>
      </div>
      <div id="text-right">
        {isLoggedIn ? (
          <>
            <p>Welcome, {username}!</p>
            <button className="login-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
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
