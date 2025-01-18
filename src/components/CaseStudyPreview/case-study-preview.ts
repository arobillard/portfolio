import { gsap } from "../../scripts/gsap";
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
        // scrub: true,
        start: "top-=50 center",
        end: "center center",
        // markers: true,
      },
    });

    if (!mqLarge()) {
      tl.from(previewImg, { y: "6rem", opacity: 0, duration: 0.5 });
    }

    const scrollItems = preview.querySelectorAll(".scroll-item");

    scrollItems.forEach((item) => {
      const pos = item.classList.contains("scroll-item--grouped")
        ? "<"
        : "-=50%";
      tl.from(item, { y: "6rem", opacity: 0, duration: 0.5 }, pos);
    });

    if (mqLarge()) {
      const x = flipped ? "-6rem" : "6rem";

      tl.from(previewImg, { x, opacity: 0, duration: 0.5 }, "-=50%");
    }
  });
}

if (!prefersReducedMotion()) caseStudyPreviewAnimations();
