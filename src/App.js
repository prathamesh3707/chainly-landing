import "./App.css";
import Hero from "./components/Hero";
import Test from "./components/Test";
import Marquee from "./components/Marquee";

import Second from "./components/Second";

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
      <Test />
    </div>
  );
}

export default App;
