import { gsap, scrub, timing } from "../../scripts/gsap";
import { mqLarge, prefersReducedMotion } from "../../scripts/mediaCheckers";

function caseStudyPreviewAnimations() {
  const caseStudyPreviews = document.querySelectorAll(".cs-preview");

  caseStudyPreviews.forEach((preview) => {
    const previewContent = preview.querySelector(".cs-preview__content");
    const previewImg = preview.querySelector(".cs-preview__img");

    const flipped = preview.classList.contains("cs-preview--flipped");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: previewContent,
        scrub: scrub,
        // start: "top-=50 center",
        start: "top 75%",
        end: "center center",
        // markers: true,
      },
    });

    if (!mqLarge()) {
      tl.from(previewImg, { y: "6rem", opacity: 0, duration: timing.long });
    }

    const scrollItems = preview.querySelectorAll(".scroll-item");

    scrollItems.forEach((item) => {
      const pos = item.classList.contains("scroll-item--grouped")
        ? "<"
        : "-=50%";
      tl.from(item, { y: "6rem", opacity: 0, duration: timing.base }, pos);
    });

    if (mqLarge()) {
      const x = flipped ? "-6rem" : "6rem";

      tl.from(previewImg, { x, opacity: 0, duration: timing.long }, "-=50%");
    }
  });
}

if (!prefersReducedMotion()) caseStudyPreviewAnimations();
