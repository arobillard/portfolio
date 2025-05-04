import { gsap, scrub, timing } from "../../../scripts/gsap";
import { mqMedium, prefersReducedMotion } from "../../../scripts/mediaCheckers";

function callOutAnimations() {
  const callOutSections = document.querySelectorAll(".call-out");

  callOutSections.forEach((section) => {
    const scBorderTop = section.querySelector(".border-line--top");
    const scBorderRight = section.querySelector(".border-line--right");
    const scBorderBottom = section.querySelector(".border-line--bottom");
    const scBorderLeft = section.querySelector(".border-line--left");

    const scTitle = section.querySelector(".section__title");
    const scText = section.querySelector(".section__text");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        scrub: scrub,
        start: mqMedium() ? "top 65%" : "top 75%",
        end: mqMedium() ? "bottom 90%" : "center center",
        // markers: true,
      },
    });

    tl.from(scBorderTop, { scaleX: 0, duration: timing.short });
    tl.from(scBorderRight, { scaleY: 0, duration: timing.short });
    tl.from(scBorderBottom, { scaleX: 0, duration: timing.short });
    tl.from(scBorderLeft, { scaleY: 0, duration: timing.short });

    tl.from(scTitle, { y: "6rem", opacity: 0, duration: timing.short }, "<");
    tl.from(scText, { y: "6rem", opacity: 0, duration: timing.short }, "-=50%");
  });
}

if (!prefersReducedMotion()) callOutAnimations();
