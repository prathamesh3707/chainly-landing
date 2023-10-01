import React from "react";
import styles from "./Services.module.css";
import Title from "../Title";
const Services = () => {
  return (
    <div className={styles.secondContainer}>
      <div className={styles.topRightImage}></div>
      <h1 className={styles.secondHeading}>
        <Title titleName="OUR SERVICES 💫" />
        <br />
        <br />
        we've curated a suite of services designed to empower your web3
        ventures.
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

export default Services;
