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
function Elevate() {
  return (
    <div className={styles.container}>
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
