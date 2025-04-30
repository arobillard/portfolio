import { gsap, scrub, timing } from "../../scripts/gsap";
import { prefersReducedMotion } from "../../scripts/mediaCheckers";

function teachingInfoAnimations() {
  const teachingInfo = document.querySelectorAll(".teaching-info");

  teachingInfo.forEach((ti) => {
    const scrollGroupings = ti.querySelectorAll(".scroll-grouping");

    scrollGroupings.forEach((sg) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sg,
          scrub: scrub,
          start: "top 75%",
          end: "center center",
          // markers: true,
        },
      });

      const scrollItems = sg.querySelectorAll(".scroll-item");

      scrollItems.forEach((item, i) => {
        const pos = i === 0 ? undefined : "-=50%";
        tl.from(item, { y: "6rem", opacity: 0, duration: timing.base }, pos);
      });
    });
  });
}

if (!prefersReducedMotion()) teachingInfoAnimations();
