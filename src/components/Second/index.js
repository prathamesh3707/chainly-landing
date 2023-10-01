import React from "react";
import styles from "./Second.module.css";
import Title from "../Title";
const Second = () => {
  return (
    <div className={styles.secondContainer}>
      <Title
        titleName="About Chainly 🚀"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className={styles.rightImage}></div>
      <h1 className={styles.secondHeading}>
        At Chainly, we've curated a suite of services designed to empower your
        web3 ventures.
      </h1>
      <p className={styles.secondContent}>
        Our offerings extend far beyond the conventional, bringing together the
        essential elements that shape success in the decentralized landscape.
        <br />
        <br />
        Our journey together is defined by collaboration, where your vision
        merges seamlessly with our expertise to transcend what's possible and
        usher in a new era of web3 marvels.
        <br />
        <br />
        Our mission is to propel the creative evolution of decentralized
        ecosystems, transforming them into thriving landscapes of innovation and
        opportunity.
      </p>
    </div>
  );
};

export default Second;
