import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div style={{ backgroundColor: "#000211" }}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <div>About Us</div>
          <div>Services</div>
          <div>Our partners</div>
          <div>Pricing plans</div>
        </div>
        <div className={styles.footerColumn}>
          <div>Blogs</div>
          <div>Terms & Conditions</div>
        </div>
      </div>
      <div className={styles.chainlyContainer}>CHAINLY. STUDIO</div>
    </div>
  );
}

export default Footer;
