import React from "react";
import styles from "./Elevate.module.css";
import Title from "../Title";
import ElevateCard from "./ElevateCard";

import Hearth from "../../assets/Hearth.png";
import Lightning from "../../assets/Lightning.png";
import Mail from "../../assets/Mail.png";
import User from "../../assets/User.png";
import ThumbUp from "../../assets/Thumb up.png";
import LightBulb from "../../assets/Lightbulb.png";
import partners from "../../assets/Partners.svg";
import launchpad from "../../assets/Partners2.svg";
function Elevate() {
  return (
    <div className={styles.container}>
      <Title titleName="Chainly Ecosystem 🛸" />
      <br />
      <br />
      <div className={styles.imageContainer}>
        <img src={partners} alt="hello" className={styles.image} />
        <img src={launchpad} alt="hello" className={styles.image} />
      </div>
      <div className={styles.rightImage}></div>
      <br />
      <br />
      <br />
      <Title titleName="Elevate with Chainly" />
      <br />
      <br />

      <div className={styles.cardContainer}>
        <ElevateCard
          iconSrc={LightBulb}
          cardText="Understanding clients vision"
        />
        <ElevateCard iconSrc={Hearth} cardText="Customised Action Plan" />
        <ElevateCard iconSrc={Lightning} cardText="Deep Dive Analysis" />
        <ElevateCard iconSrc={Mail} cardText="Live Communication" />
        <ElevateCard iconSrc={User} cardText="Progress Check" />
        <ElevateCard iconSrc={ThumbUp} cardText="Handover & Follow Up" />
      </div>
    </div>
  );
}

export default Elevate;
