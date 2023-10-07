import styles from "./Navbar.module.css";
import logo from "../../assets/Chainly.png"; // Adjust the path based on your directory structure
import React, { useState } from "react";
function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<div className={styles.navbar}>
				<img src={logo} alt="Logo" className={styles.logo} />
				<a href="#home">Home</a>
				<a href="#about-us">About Us</a>
				<a href="#services">Services</a>
				<a href="#pricing">Pricing</a>
			</div>

			<div className={styles.dropdown_navbar}>
				{!isOpen && (
					<button className={styles.iconic} onClick={() => setIsOpen(!isOpen)}>
						☰
					</button>
				)}
				{isOpen && (
					<button className={styles.iconic} onClick={() => setIsOpen(!isOpen)}>
						✖
					</button>
				)}

				{isOpen && (
					<div className={styles.menu}>
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
