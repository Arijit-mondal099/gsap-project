import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/common/Navbar";

// register gsap plugins to access those globaly
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="h-screen">
      <Navbar />
    </main>
  );
};

export default App;
