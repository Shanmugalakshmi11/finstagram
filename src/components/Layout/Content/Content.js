// Content.js

import React from "react";
import styles from "./Content.module.css";
import ImageGrid from "./ImageGrid";
import Image from "./Gallery";

function Content() {
  return (
    <div className={styles["row-container"]}>
      <div className={styles["column-container1"]}>
        <div className={styles["item1"]}>
          <ImageGrid />
        </div>{" "}
      </div>
      <div className={styles["column-container"]}>
        <div className={styles["item1"]}>
          Techstarter
          <button className={styles["button"]}>Folgen</button>
          <button className={styles["button"]}>Nachricten Senden</button>
          <button className={styles["button"]}>...</button>
        </div>
        <div className={styles["text-container"]}>
          <a href="https://www.instagram.com/">53 Beitgräge</a> &nbsp;
          <a href="https://www.instagram.com/">2.693 Followers</a> &nbsp;
          <a href="https://www.instagram.com/">25 Gefolgt</a>
          <br />
          <br />
          <div className={styles["text-container"]}>
            <h1
              style={{
                color: "#5c0404",
                fontSize: "large",
                letterSpacing: "3px",
                textAlign: "justify",
              }}
            >
              Techstarter
            </h1>
          </div>
          <div className={styles["text-container"]}>
            <p
              style={{
                color: "black",
                fontSize: "small",
                textAlign: "justify",
              }}
            >
              {" "}
              <br /> Bildung <br />
              ☁️ in 12 Monaten zum Cloud Spezialist
              <br />
              🏠 100% online
              <br />
              ✍🏼 Kursstart: 22.01.2024
              <br />
              💻 Laptop inklusive
              <br />
              Informiere dich jetzt ⤵<br />
              Herzogspitalstr. 24, Munich, Germany 80331
              <br />
              linktr.ee/techstarter
            </p>
          </div>
        </div>
        <div className={styles["text-cointainer"]}>
          BEITRÄGE &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; REELS
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MARKIERT
        </div>
        <div className={styles["row-container"]}>
          <div className={styles["item2"]}>
            <Image />
            <Image />
            <Image />
            <Image />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
