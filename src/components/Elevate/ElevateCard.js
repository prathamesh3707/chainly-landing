import React from "react";
import styles from "./ElevateCard.module.css";

const ElevateCard = ({ iconSrc, cardText }) => {
  return (
    <div className={styles.elevateCard}>
      <img src={iconSrc} alt="Card Icon" className={styles.cardIcon} />
      <div className={styles.cardText}>{cardText}</div>
    </div>
  );
};

export default ElevateCard;
