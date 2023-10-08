import React from "react";
import styles from "./LogoMarquee.module.css";

const LogoMarquee = ({ images, direction = "forward", style }) => {
  const marqueeClass =
    direction === "reverse"
      ? styles.marqueeContentReverse
      : styles.marqueeContent;

  const doubledImages = Array(100)
    .fill([...images])
    .flat(); 

  return (
    <div className={styles.marqueeContainer} style={style}>
      <div className={marqueeClass}>
        {doubledImages.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt="Sponsor logo"
            className={styles.logoImage}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
