import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/Chainly.png"; // Adjust the path based on your directory structure

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <a href="#home">Home</a>
      <a href="#about-us">About Us</a>
      <a href="#services">Services</a>
      <a href="#pricing">Pricing</a>
    </div>
  );
}

export default Navbar;
