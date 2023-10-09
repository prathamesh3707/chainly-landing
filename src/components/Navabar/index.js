import styles from "./Navbar.module.css";
import logo from "../../assets/Chainly.png"; // Adjust the path based on your directory structure
import nav from "../../assets/nav.png"; // Adjust the path based on your directory structure
// import CalendlyButton from "../Connect/Connect";
import { useEffect, useRef } from "react";
import React, { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className={styles.navbar}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <a href="#home">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        {/* <a href="https://calendly.com/chainlystudio/consult">
					<CalendlyButton />{" "}
				</a> */}
      </div>

      <div className={styles.dropdown_navbar}>
        {!isOpen && (
          <button className={styles.iconic} onClick={() => setIsOpen(!isOpen)}>
            <img src={nav} alt="hello" className={styles.image} />
          </button>
        )}
        {isOpen && (
          <button className={styles.iconic} onClick={() => setIsOpen(!isOpen)}>
            ✘
          </button>
        )}

        {isOpen && (
          <div className={styles.menu} ref={dropdownRef}>
            <a href="#home">Home</a>
            <a href="#about-us">About Us</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
