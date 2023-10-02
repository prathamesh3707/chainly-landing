import React from "react";
import styles from "./Services.module.css";
import Title from "../Title";
import Card from "./Card";
const cardData = [
  { iconPath: "marketing", name: "Marketing" },
  { iconPath: "agile", name: "Icubation" },
  { iconPath: "candles", name: "Listings" },
  { iconPath: "party", name: "Events" },
  { iconPath: "product", name: "Launch" },
  { iconPath: "pieChart", name: "Market Making" },
  { iconPath: "programming", name: "Development" },
  { iconPath: "funding", name: "Fund Raise" },
  { iconPath: "analysis", name: "Auditing" },
  { iconPath: "handshake", name: "Partnerships" },
  { iconPath: "design", name: "Designing" },
  { iconPath: "paper", name: "White paper" },
];

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
      <div className={styles.cardList}>
        {cardData.map((card, index) => (
          <Card key={index} iconPath={card.iconPath} name={card.name} />
        ))}
      </div>
    </div>
  );
};

export default Services;
