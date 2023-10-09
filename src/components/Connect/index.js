import React, { useEffect } from "react";
import "./Connect.css";

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
        url: "https://calendly.com/chainlystudio/consult",
      });
    }
    return false;
  };

  return (
    <div className="calendly-container">
      <button className="calendly-button" onClick={openCalendly}>
        LET'S TALK
      </button>
    </div>
  );
}

export default CalendlyButton;
