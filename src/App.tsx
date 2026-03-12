import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import Cocktails from "./components/sections/Cocktails";
import About from "./components/sections/About";
import Art from "./components/sections/Art";

// register gsap plugins to access those globaly
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <div className="min-h-screen"></div>
    </main>
  );
};

export default App;
