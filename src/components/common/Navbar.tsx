import { navLinks } from "../../lib/constants";
import { images } from "../../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "#nav",
        start: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });

  return (
    <nav id="nav">
      <div>
        <a href="#hero" className="flex-center gap-4">
          <img src={images.logo} alt="app-logo-image" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((nl) => (
            <li key={nl.id}>
              <a href={`#${nl.id}`}>{nl.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
