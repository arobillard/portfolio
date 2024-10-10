import { animationDisabled, gsap } from "../../scripts/gsap";

function caseStudyPreviewAnimations() {
  const caseStudyPreviews = document.querySelectorAll(".cs-preview");

  caseStudyPreviews.forEach((preview) => {
    const previewContent = preview.querySelector(".cs-preview__content");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: previewContent,
        // scrub: true,
        start: "top-=50 center",
        end: "center center",
        // markers: true,
      },
    });

    const scrollItems = preview.querySelectorAll(".scroll-item");

    scrollItems.forEach((item) => {
      const pos = item.classList.contains("scroll-item--grouped")
        ? "<"
        : "-=50%";
      tl.from(item, { y: 100, opacity: 0, duration: 0.5 }, pos);
    });
  });
}

if (!animationDisabled()) caseStudyPreviewAnimations();
