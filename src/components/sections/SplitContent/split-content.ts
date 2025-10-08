import { gsap, scrub, timing } from "../../../scripts/gsap";
import { mqLarge, prefersReducedMotion } from "../../../scripts/mediaCheckers";

function splitContentAnimations() {
  const splitContentSections = document.querySelectorAll(".split-content");

  splitContentSections.forEach((section) => {
    const scContent = section.querySelector(".section__content");
    const scImg = section.querySelector(".section__img");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scContent,
        scrub: scrub,
        start: "top 75%",
        end: "center center",
        // markers: true,
      },
    });

    if (!mqLarge()) {
      tl.from(scImg, { y: "6rem", opacity: 0, duration: timing.short });
    } else {
      tl.from(scImg, { x: "-6rem", opacity: 0, duration: timing.short });
    }

    const scrollItems = section.querySelectorAll(
      ".section__pre-title, .section__title, .section__text, .section__link",
    );

    scrollItems.forEach((item) => {
      const pos = item.classList.contains("scroll-item--grouped")
        ? "<"
        : "-=50%";
      tl.from(item, { y: "6rem", opacity: 0, duration: timing.short }, pos);
    });

    // if (mqLarge()) {
    //   tl.from(
    //     scImg,
    //     { x: "-6rem", opacity: 0, duration: timing.short },
    //     "-=50%",
    //   );
    // }
  });
}

if (!prefersReducedMotion()) splitContentAnimations();
