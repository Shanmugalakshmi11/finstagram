// Content.js

import React from "react";
import styles from "./Content.module.css";
import ImageGrid from "./ImageGrid";
import Image from "./Gallery";

function Content() {
  return (
    <div>
      <div className={styles["row"]}>
        <div className={styles["column"]}></div>
        <div className={styles["column"]}>
          <ImageGrid />
        </div>

        <div className={styles["column"]}>
          <div className={styles["text-container"]}>
            Techstarter&nbsp;
            <button className={styles["button"]}>Folgen</button> &nbsp;
            <button className={styles["button"]}>Nachricten Senden</button>
            &nbsp;
            <button className={styles["button"]}>...</button>
            <div className={styles["text-container"]}>
              <a href="https://www.instagram.com/">53 Beitgräge</a>{" "}
              &nbsp;&nbsp;&nbsp;
              <a href="https://www.instagram.com/">2.693 Followers</a>{" "}
              &nbsp;&nbsp;
              <a href="https://www.instagram.com/">25 Gefolgt</a>
              <br />
              <br />
            </div>
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
            </div>{" "}
          </div>{" "}
        </div>
        <div className={styles["column"]}></div>
      </div>
      <div className={styles["row"]}>
        <div className={styles["column"]}>
          BEITRÄGE &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; REELS
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MARKIERT <br /> <br />
          <Image />
          <Image />
          <Image />
          <Image />
        </div>
      </div>
    </div>
  );
}

export default Content;
