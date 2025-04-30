import { gsap, scrub, timing } from "../../scripts/gsap";
import { mqLarge, prefersReducedMotion } from "../../scripts/mediaCheckers";

function caseStudyPreviewAnimations() {
  const coolStuff = document.querySelectorAll(".cool-stuff-item");

  coolStuff.forEach((preview) => {
    const previewContent = preview.querySelector(".cool-stuff-item__content");
    const previewImg = preview.querySelector(
      ".cool-stuff-item__img, .cool-stuff-item__video",
    );

    const flipped = preview.classList.contains("cool-stuff-item--flipped");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: previewContent,
        scrub: scrub,
        start: "top 75%",
        end: "center center",
        // markers: true,
      },
    });

    if (!mqLarge()) {
      tl.from(previewImg, { y: "6rem", opacity: 0, duration: timing.short });
    }

    const scrollItems = preview.querySelectorAll(".scroll-item");

    scrollItems.forEach((item) => {
      const pos = item.classList.contains("scroll-item--grouped")
        ? "<"
        : "-=50%";
      tl.from(item, { y: "6rem", opacity: 0, duration: timing.short }, pos);
    });

    if (mqLarge()) {
      const x = flipped ? "-6rem" : "6rem";

      tl.from(previewImg, { x, opacity: 0, duration: timing.short }, "-=50%");
    }
  });
}

if (!prefersReducedMotion()) caseStudyPreviewAnimations();
