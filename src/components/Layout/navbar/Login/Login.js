// Login.js
import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Your login logic would go here (e.g., interacting with a backend).
    // For now, let's just simulate a successful login if both username and password are provided.
    if (username && password) {
      setLoggedIn(true);
      onLogin(username); // Pass the username to the parent component
    }
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <p>Welcome, {username}!</p>
      ) : (
        <>
          <h2>Login</h2>
          <form>
            <label>
              Username:
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
