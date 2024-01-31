// ImageGrid.js
import React from "react";
import "./Content.module.css"; // Import the CSS file for styling
import imageGrid from "./images/tech.jpg";

function ImageGrid() {
  console.log(imageGrid);
  return (
    <div className={["content-container"]}>
      <img
        className="profil-bild-img"
        src={imageGrid}
        alt="Tech Image"
        height={200}
        width={200}
      />
    </div>
  );
}

export default ImageGrid;
