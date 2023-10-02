import React from "react";
import styles from "./Hero.module.css";
import Navbar from "../Navabar";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroText}>
        MARKETING Services for Decentralized Journey
      </div>
      <Navbar />
      <div className={styles.comprehensiveText}>
        Comprehensive services <br /> for your Decentralised journey. 🚀
      </div>
    </div>
  );
};

export default Hero;
