import "./App.css";
import Hero from "./components/Hero";
import Test from "./components/Test";
import Marquee from "./components/Marquee";
<<<<<<< HEAD
import Card from "./components/Serv/Card";

=======
import Elevate from "./components/Elevate";
>>>>>>> 11cd27c1978ed90e20d188472486cf45723c0d99
import Second from "./components/Second";
import Services from "./components/Services";

function App() {
<<<<<<< HEAD
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
			<Card />
		</div>
	);
=======
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
    </div>
  );
>>>>>>> 11cd27c1978ed90e20d188472486cf45723c0d99
}

export default App;
