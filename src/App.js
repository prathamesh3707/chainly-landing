import "./App.css";
import Hero from "./components/Hero";
import Test from "./components/Test";
import Marquee from "./components/Marquee";
import Elevate from "./components/Elevate";
import Second from "./components/Second";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <Second />
      <Marquee text="Chainly. studio" hollowText="Chainly. studio" />
      <Marquee
        text="Chainly. studio"
        hollowText="Chainly. studio"
        direction="reverse"
        style={{ marginTop: "-2rem" }}
      />
      <Services />
      <Elevate />
      <Test />
      <Contact />
      <Marquee text="Let's Talk" hollowText="Let's Talk" />
      <Footer />
    </div>
  );
}

export default App;
