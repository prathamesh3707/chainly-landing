import React from "react";
import styles from "./Marquee.module.css";

const Marquee = ({ text, hollowText, direction = "forward", style }) => {
  const content = [];
  for (let i = 0; i < 100; i++) {
    content.push(
      <React.Fragment key={i}>
        <span>{text}</span>
        <span className={styles.hollow}>{hollowText}</span>
      </React.Fragment>
    );
  }

  const marqueeClass =
    direction === "reverse"
      ? styles.marqueeContentReverse
      : styles.marqueeContent;

  return (
    <div className={styles.marqueeContainer} style={style}>
      <div className={marqueeClass}>{content}</div>
    </div>
  );
};



export default Marquee;
