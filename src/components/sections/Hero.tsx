import { useGSAP } from "@gsap/react";
import { images, videos } from "../../assets";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroTitleSplite = new SplitText(".title", { type: "chars, words" });
    const heroParasSplite = new SplitText(".subtitle", { type: "lines" });

    heroTitleSplite.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroTitleSplite.chars, {
      yPercent: 100,
      duration: 1.8,
      opacity: 0,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(".left-leaf", {
      xPercent: -100,
      yPercent: 100,
      duration: 1.2,
      ease: "expo.out",
      delay: 0.5, 
    });

    gsap.from(".right-leaf", {
      xPercent: 100,
      yPercent: -100,
      duration: 1.2,
      ease: "expo.out",
      delay: 0.5, 
    });

    gsap.from(heroParasSplite.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    // video animation
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      }
    });

    if (videoRef?.current) {
      videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current, {
          currentTime: videoRef.current && videoRef.current.duration,
        });
      };
    }
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">mojito</h1>

        <img
          src={images.leftHeroLeaf}
          alt="hero-left-leaf-image"
          className="left-leaf"
        />
        <img
          src={images.rightHeroLeaf}
          alt="hero-right-leaf-image"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>

              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>

      {/* video animation via gsap scroll trigger */}
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src={videos.heroVideo}
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
