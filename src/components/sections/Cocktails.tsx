import { useGSAP } from "@gsap/react";
import { images } from "../../assets";
import { cocktailLists, mockTailLists } from "../../lib/constants";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Cocktails = () => {
  useGSAP(() => {
    const parasLineSplit = new SplitText(".para", { type: "lines" });
    const parastl = gsap.timeline({
      scrollTrigger: { trigger: ".para", start: "top bottom" },
    });

    const parallaxTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 90%",
        scrub: true,
      },
    });

    parastl.from(parasLineSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.5,
    });

    parallaxTimeLine
      .from("#c-left-leaf", { x: -100, y: 100 })
      .from("#c-right-leaf", { x: 100, y: 100 });
  }, []);

  return (
    <section id="cocktails" className="noisy">
      <img
        src={images.cocktailLeftLeaf}
        alt="cocktailLeftLeaf"
        id="c-left-leaf"
      />
      <img
        src={images.cocktailRightLeaf}
        alt="cocktailRightLeaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2 className="para">Most Populat Cocktails:</h2>

          <ul>
            {cocktailLists.map((c) => (
              <li key={c.name}>
                <div className="md:me-28">
                  <h3 className="para">{c.name}</h3>
                  <p className="para">
                    {c.country} | {c.detail}
                  </p>
                </div>
                <span className="para">- {c.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2 className="para">Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map((mt) => (
              <li key={mt.name}>
                <div className="md:me-28">
                  <h3 className="para">{mt.name}</h3>
                  <p className="para">
                    {mt.country} | {mt.detail}
                  </p>
                </div>
                <span className="para">- {mt.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
