import { AboutUs } from "./components/AboutUs/AboutUs";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { Navigation } from "./components/Navigation";
import GlobalStyle from "./GlobalStyles";
import "react-multi-carousel/lib/styles.css";
import { HowWeWork } from "./components/HowWeWork/HowWeWork";
import { Premium } from "./components/Premium/Premium";
import { Contact } from "./components/Contact/Contact";
import { Realizations2 } from "./components/Realizationsv2/Realizations";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <HeroBanner />
      <AboutUs />
      {/* <Realizations /> */}
      <Realizations2 />
      <HowWeWork />
      <Premium />
      <Contact />
    </div>
  );
}

export default App;
