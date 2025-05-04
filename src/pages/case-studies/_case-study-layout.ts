import { gsap, scrub, timing } from "../../scripts/gsap";
import { mqLarge, prefersReducedMotion } from "../../scripts/mediaCheckers";

function caseStudyAnimations() {
  function headerAnimations() {
    const csHeader = document.querySelector(".cs-header");

    if (!(csHeader instanceof Element)) return;

    const csImg = csHeader.querySelector(".cs-header__img");

    const tl = gsap.timeline({ delay: 1 });

    if (!mqLarge()) {
      tl.from(csImg, { y: "6rem", opacity: 0, duration: timing.long });
    }

    const scrollItems = csHeader.querySelectorAll(".scroll-item");

    scrollItems.forEach((item, i) => {
      const pos = i !== 0 ? "-=50%" : undefined;
      tl.from(item, { y: "6rem", opacity: 0, duration: timing.base }, pos);
    });

    if (mqLarge()) {
      tl.from(csImg, { x: "6rem", opacity: 0, duration: timing.long }, "-=50%");
    }
  }

  function footerAnimations() {
    const csFooter = document.querySelector(".cs-footer");
    if (!(csFooter instanceof Element)) return;

    const prev = csFooter.querySelector(".icon:first-child");
    const next = csFooter.querySelector(".icon:last-child");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: csFooter,
        scrub: scrub,
        start: "top-=100 75%",
        end: "center 75%",
        // markers: true,
      },
    });

    tl.from(prev, { x: "6rem", opacity: 0, duration: timing.long });
    tl.from(next, { x: "-6rem", opacity: 0, duration: timing.long }, "<");
  }

  headerAnimations();
  footerAnimations();
}

if (!prefersReducedMotion()) caseStudyAnimations();
