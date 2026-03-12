import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import Cocktails from "./components/sections/Cocktails";
import About from "./components/sections/About";
import Art from "./components/sections/Art";
import Menu from "./components/sections/Menu";
import Contact from "./components/sections/Contact";

// register gsap plugins to access those globaly
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
};

export default App;
