import { gsap, scrub } from "../../scripts/gsap";
import { prefersReducedMotion } from "../../scripts/mediaCheckers";

function DividersAnimations() {
  const Dividers = document.querySelectorAll(
    ".divider:not(.divider--disable-animation)",
  );

  Dividers.forEach((divider) => {
    gsap.from(divider, {
      scaleX: 0,
      scrollTrigger: {
        trigger: divider,
        scrub: scrub,
        start: "top-=100 85%",
        end: "center 85%",
        markers: true,
      },
    });
  });
}

if (!prefersReducedMotion()) DividersAnimations();
