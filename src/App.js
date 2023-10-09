import "./App.css";
import Hero from "./components/Hero";
import Test from "./components/Test";
import Marquee from "./components/Marquee";
import Elevate from "./components/Elevate";
import Second from "./components/Second";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Video from "./components/Video/Video";
import Links from "./components/Links/Links";
import Form from "./components/Form/Form";
// import Car from "./components/Car/Car";
import { useState, useEffect } from "react";
import Navbar from "./components/Navabar";
function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const aboutUsPosition = document.getElementById("about-us").offsetTop;
      const contactPosition =
        document.getElementById("contact-section").offsetTop;

      if (
        window.scrollY >= aboutUsPosition &&
        window.scrollY < contactPosition
      ) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Hero />
      <div id="about-us">
        <Second />
      </div>
      <Marquee text="Chainly. studio" hollowText="Chainly. studio" />
      <Marquee
        text="Chainly. studio"
        hollowText="Chainly. studio"
        direction="reverse"
        style={{ marginTop: "-2rem" }}
      />
      <div id="services">
        <Services />
      </div>
      <Elevate />
      {/* <Car /> */}
      <div id="pricing">
        <Test />
      </div>
      <Video /> <Contact />
      <Marquee text="Let's Talk" hollowText="Let's Talk" />
      <Links />
      <div id="contact-section">
        <Form />
      </div>
      <Footer />
      {showNavbar && <Navbar />}{" "}
    </div>
  );
}

export default App;
