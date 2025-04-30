import { gsap, scrub, timing } from "../../scripts/gsap";
import { prefersReducedMotion } from "../../scripts/mediaCheckers";

function csCategoryAnimations() {
  const csCategories = document.querySelectorAll(".cool-stuff-category");

  csCategories.forEach((cat) => {
    const csSTitle = cat.querySelector(".cool-stuff-category__title");
    const csSDesc = cat.querySelector(".cool-stuff-category__desc");

    const csC_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: csSTitle,
        scrub: scrub,
        start: "top 75%",
        end: "center center",
        // markers: true,
      },
    });

    csC_timeline.from(csSTitle, {
      y: "-6rem",
      opacity: 0,
      duration: timing.long,
    });
    csC_timeline.from(
      csSDesc,
      {
        x: "6rem",
        opacity: 0,
        duration: timing.long,
      },
      "-=50%",
    );
  });
}

if (!prefersReducedMotion()) csCategoryAnimations();
