import { gsap, scrub, timing } from "../../../scripts/gsap";
import { prefersReducedMotion } from "../../../scripts/mediaCheckers";

function videosAnimations() {
  const videosSections = document.querySelectorAll(".videos");

  videosSections.forEach((section) => {
    const scTitle = section.querySelector(".section__title");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        scrub: scrub,
        start: "top 50%",
        end: "center center",
        // markers: true,
      },
    });

    tl.from(scTitle, { x: "6rem", opacity: 0, duration: timing.short });

    const scrollItems = section.querySelectorAll(".scroll-item");

    scrollItems.forEach((item) => {
      const pos = item.classList.contains("scroll-item--grouped")
        ? "<"
        : "-=50%";
      tl.from(item, { y: "6rem", opacity: 0, duration: timing.short }, pos);
    });
  });
}

if (!prefersReducedMotion()) videosAnimations();
