import React from "react";
import styles from "./Hero.module.css";
import frame from "../../assets/Frame 1.png";
import bg from "../../assets/BG.png";
import dots from "../../assets/Dots.png";
import CalendlyButton from "../Connect";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <img src={frame} alt="hello" className={styles.image1} />
      <img src={bg} alt="hello" className={styles.image2} />
      <img src={dots} alt="hello" className={styles.image3} />
      <div className={styles.heroText}>
        MARKETING Services for Decentralized Journey
      </div>
      <div className={styles.comprehensiveText}>
        Comprehensive services <br /> for your Decentralised journey. 🚀
      </div>
      <a href="https://calendly.com/chainlystudio/consult">
        <CalendlyButton />{" "}
      </a>
    </div>
  );
};

export default Hero;
