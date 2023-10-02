import React from "react";
import styles from "./Contact.module.css";
import Title from "../Title";
const Contact = () => {
  return (
    <div className={styles.secondContainer}>
      {/* <div className={styles.topRightImage}></div> */}
      <h1 className={styles.secondHeading}>
        <Title titleName="GET IN TOUCH 🚀" />
        <br />
        <br />
        Ready to Begin the Journey?
      </h1>
    </div>
  );
};

export default Contact;
