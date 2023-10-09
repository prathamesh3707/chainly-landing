import React from "react";
import styles from "./Elevate.module.css";
import Title from "../Title";
import ElevateCard from "./ElevateCard";

import Hearth from "../../assets/Hearth.png";
import Lightning from "../../assets/Lightning.png";
import Mail from "../../assets/Mail.png";
import User from "../../assets/User.png";
import ThumbUp from "../../assets/Thumb up.png";
import LightBulb from "../../assets/Lightbulb.png";
// import partners from "../../assets/Partners.svg";
// import launchpad from "../../assets/Partners2.svg";
// import exchanges from "../../assets/Partners3.svg";
import p1 from "../../assets/partners/p1.svg";
import p2 from "../../assets/partners/p2.svg";
import p3 from "../../assets/partners/p3.svg";
import p4 from "../../assets/partners/p4.svg";
import p5 from "../../assets/partners/p5.svg";
import p6 from "../../assets/partners/p6.svg";
import p7 from "../../assets/partners/p7.svg";
import p8 from "../../assets/partners/p8.svg";
import p9 from "../../assets/partners/p9.svg";
import l1 from "../../assets/launchpad/l1.svg";
import l2 from "../../assets/launchpad/l2.svg";
import l3 from "../../assets/launchpad/l3.svg";
import l4 from "../../assets/launchpad/l4.svg";
import l5 from "../../assets/launchpad/l5.svg";
import l6 from "../../assets/launchpad/l6.svg";
import l7 from "../../assets/launchpad/l7.svg";

import e1 from "../../assets/exchanges/e1.svg";
import e2 from "../../assets/exchanges/e2.svg";
import e3 from "../../assets/exchanges/e3.svg";
import e4 from "../../assets/exchanges/e4.svg";
import e5 from "../../assets/exchanges/e5.svg";
import e6 from "../../assets/exchanges/e6.svg";
import e7 from "../../assets/exchanges/e7.svg";
import e8 from "../../assets/exchanges/e8.svg";
import e9 from "../../assets/exchanges/e9.svg";
import e10 from "../../assets/exchanges/e10.svg";
import e11 from "../../assets/exchanges/e11.svg";
import e12 from "../../assets/exchanges/e12.svg";

import LogoMarquee from "../LogoMarquee";
function Elevate() {
	const partners = [p1, p2, p3, p4, p5, p6, p7, p8, p9];
	const launchpad = [l1, l2, l3, l4, l5, l6, l7];
	const exchanges = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12];
	return (
		<div className={styles.container}>
			<Title titleName="Chainly Ecosystem 🛸" />
			<br />
			<br />
			{/* <div className={styles.imageContainer}>
				<img src={partners} alt="hello" className={styles.image} />
				<img src={launchpad} alt="hello" className={styles.image} />
			</div> */}
			{/* <div className={styles.elevate}>
				<img src={exchanges} alt="hello" className={styles.imageD} />
			</div> */}
			<div className={styles.title}>partners</div>
			<LogoMarquee images={partners} />
			<br />
			<div className={styles.title}>launchpad</div>

			<LogoMarquee images={launchpad} direction="reverse" />
			<br />
			<div className={styles.title}>exchanges</div>

			<LogoMarquee images={exchanges} />

			<div className={styles.rightImage}></div>
			<br />
			<br />
			<br />
			<Title titleName="Elevate with Chainly" />
			<br />
			<br />

			<div className={styles.cardContainer}>
				<ElevateCard
					iconSrc={LightBulb}
					cardText="Understanding clients vision"
				/>
				<ElevateCard iconSrc={Hearth} cardText="Customised Action Plan" />
				<ElevateCard iconSrc={Lightning} cardText="Deep Dive Analysis" />
				<ElevateCard iconSrc={Mail} cardText="Live Communication" />
				<ElevateCard iconSrc={User} cardText="Progress Check" />
				<ElevateCard iconSrc={ThumbUp} cardText="Handover & Follow Up" />
			</div>
		</div>
	);
}

export default Elevate;
