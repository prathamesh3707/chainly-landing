import React, { useEffect } from "react";
import styles from "./Connect.module.css";
import chainly from "../../assets/calendly.webp";

function CalendlyButton() {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://assets.calendly.com/assets/external/widget.js";
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	const openCalendly = () => {
		if (window.Calendly) {
			window.Calendly.initPopupWidget({
				url: "https://calendly.com/chainly/consult",
			});
		}
		return false;
	};

	return (
		<div className={styles.calendly_container}>
			<button className={styles.but} onClick={openCalendly}>
				<img className={styles.chain} src={chainly} alt="hello" />
			</button>
		</div>
	);
}

export default CalendlyButton;
