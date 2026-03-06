import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

// register gsap plugins to access those globaly
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return <div>App</div>;
};

export default App;
