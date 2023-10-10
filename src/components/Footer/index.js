import React from "react";
import styles from "./Footer.module.css";

function Footer() {
	return (
		<div style={{ backgroundColor: "#000211" }}>
			<div className={styles.footerContainer}>
				<div className={styles.footerColumn}>
					<a href="#about-us">
						<div className={styles.a}>About Us</div>
					</a>
					<a href="#services">
						<div className={styles.a}>Services</div>
					</a>
					<a href="#ecosystem">
						<div className={styles.a}>Our partners</div>
					</a>
					<a href="#pricing">
						<div className={styles.a}>Pricing plans</div>
					</a>
				</div>
				<div className={styles.footerColumn}>
					<div className={styles.a}>Blogs</div>
					<div className={styles.a}>Terms & Conditions</div>
				</div>
			</div>
			<div className={styles.chainlyContainer}>CHAINLY. STUDIO</div>
			<div className={styles.copyright}>
				© 2023 Chainly Studio. All rights reserved
			</div>
		</div>
	);
}

export default Footer;
