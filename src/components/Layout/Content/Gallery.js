// Gallery.js

import React from "react";
import "./Content.module.css";
import image1 from "./images/images1.jpg";
import image2 from "./images/images2.jpg";
import image3 from "./images/images3.jpg";
import image4 from "./images/images4.jpg";
import image5 from "./images/images5.jpg";
import image6 from "./images/images6.jpg";

const images = [image1, image2, image3, image4, image5, image6]; // Add more image paths as needed

function Image() {
  return (
    <div>
      {images.map((img, index) => (
        <img
          key={index}
          className={["profil-bild-img"]}
          src={img}
          alt={`Image${index + 1}`}
          height={200}
          width={200}
        />
      ))}
    </div>
  );
}

export default Image;
