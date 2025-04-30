import { gsap, scrub, timing } from "../../scripts/gsap";
import { prefersReducedMotion } from "../../scripts/mediaCheckers";

function quickLinksAnimations() {
  const quickLinks = document.querySelectorAll(".quick-links");

  quickLinks.forEach((ql) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ql,
        scrub: scrub,
        start: "top-=50 center",
        end: "center center",
        // markers: true,
      },
    });

    const scrollItems = ql.querySelectorAll(".scroll-item");

    scrollItems.forEach((item, i) => {
      if (item.classList.contains("scroll-item--divider")) {
        tl.from(item, { scale: 0, opacity: 0, duration: timing.base }, "-=50%");
      } else {
        const pos = item.classList.contains("scroll-item--grouped")
          ? "<"
          : "-=50%";
        tl.from(
          item,
          { y: 100, opacity: 0, duration: timing.base },
          i === 0 ? undefined : pos,
        );
      }
    });
  });
}

if (!prefersReducedMotion()) quickLinksAnimations();
