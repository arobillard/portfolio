import { animationDisabled, gsap } from "../../scripts/gsap";

function quickLinksAnimations() {
  const quickLinks = document.querySelectorAll(".quick-links");

  quickLinks.forEach((ql) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ql,
        // scrub: true,
        start: "top-=50 center",
        end: "center center",
        // markers: true,
      },
    });

    const scrollItems = ql.querySelectorAll(".scroll-item");

    scrollItems.forEach((item, i) => {
      if (item.classList.contains("scroll-item--divider")) {
        tl.from(item, { scale: 0, opacity: 0, duration: 0.5 }, "-=50%");
      } else {
        const pos = item.classList.contains("scroll-item--grouped")
          ? "<"
          : "-=50%";
        tl.from(
          item,
          { y: 100, opacity: 0, duration: 0.5 },
          i === 0 ? null : pos,
        );
      }
    });
  });
}

if (!animationDisabled()) quickLinksAnimations();
