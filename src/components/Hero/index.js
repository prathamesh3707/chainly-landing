import React from "react";
import styles from "./Hero.module.css";
import Navbar from "../Navabar";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroText}>
        MARKETING Services for Decentralized Journey
      </h1>
      <Navbar/>
    </div>
  );
};

export default Hero;
