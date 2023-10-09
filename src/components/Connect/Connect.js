import React from "react";

function CalendlyButton() {
	const openCalendly = () => {
		if (window.Calendly) {
			window.Calendly.initPopupWidget({
				url: "https://calendly.com/chainlystudio/consult",
			});
		}
		return false;
	};

	return <button onClick={openCalendly}>Let's Connect</button>;
}

export default CalendlyButton;
