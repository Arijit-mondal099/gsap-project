import { useGSAP } from "@gsap/react";
import { images } from "../../assets";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    const aboutTextSplites = new SplitText("#about, h2", { type: "words" });

    const scrollTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });

    scrollTimeLine
      .from(".badge", {
        opacity: 0,
        y: 50,
        ease: "expo.inOut",
      })
      .from(aboutTextSplites.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        stagger: 0.01,
        ease: "expo.inOut",
      })
      .from(".top-grid, .bottom-grid", {
        opacity: 0,
        duration: 1,
        stagger: 0.5,
      });
  }, []);

  return (
    <section id="about">
      <div className="mb-16 px-5 md:px-0">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>

              <p className="text-sm font-light text-white/80">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src={images.abt1} alt="about-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src={images.abt2} alt="about-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src={images.abt5} alt="about-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src={images.abt3} alt="about-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src={images.abt4} alt="about-img-4" />
        </div>
      </div>
    </section>
  );
};

export default About;
