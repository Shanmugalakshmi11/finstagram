// Navigationbar.js

import styles from "./Navigationbar.module.css";
import finstergram from "./images/finstergram.png";

function Navigationbar() {
  return (
    <nav className="navbar">
      <div id="text-left">
        <a href="index.html">
          {" "}
          <img src={finstergram} alt="Home" />{" "}
        </a>
      </div>
      <div id="text-right">
        <button className="login-button">Login</button>&nbsp;
        <button className="login-button">Signup</button>
      </div>
    </nav>
  );
}

export default Navigationbar;

/*
import styles from "./Navigationbar.module.css";

function Navigationbar() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navbar}></div>
    </div>
  );
}

export default Navigationbar;
*/
