import React, { useState, useEffect } from "react";
import styles from "./Car.module.css";
import partner1 from "../../assets/Partners2.svg";
import partner2 from "../../assets/Partners.svg";
import partner3 from "../../assets/Partners3.svg";
import Title from "../Title";
const Car = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [partner3, partner1, partner2];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, images.length]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "4rem",
        }}
      >
        <Title titleName="Chainly Ecosystem 🛸" />
      </div>
      <div className={styles.carousel}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={index === currentIndex ? styles.active : styles.slide}
          />
        ))}
      </div>
    </div>
  );
};

export default Car;
