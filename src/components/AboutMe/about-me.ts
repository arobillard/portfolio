import { gsap, scrub, timing } from "../../scripts/gsap";
import {
  mqLarge,
  mqMedium,
  prefersReducedMotion,
} from "../../scripts/mediaCheckers";

function aboutMeAnimations() {
  const aboutMe = document.querySelector(".about-me");

  if (!aboutMe) return;

  const aboutMeContent = aboutMe.querySelector(".about-me__content");
  const aboutMeImg = aboutMe.querySelector(".about-me__img img");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutMe,
      scrub: scrub,
      start: "top-=50 center",
      end: "center center",
      // markers: true,
    },
  });

  if (!mqMedium()) {
    tl.from(aboutMeImg, { y: "6rem", opacity: 0, duration: timing.base });
  }

  const scrollItems = aboutMe.querySelectorAll(".scroll-item");

  scrollItems.forEach((item, i) => {
    const pos = item.classList.contains("scroll-item--grouped") ? "<" : "-=50%";
    tl.from(
      item,
      { y: "6rem", opacity: 0, duration: timing.base },
      i !== 0 ? pos : undefined,
    );
  });

  if (mqMedium()) {
    const animation: gsap.TweenVars = {
      y: "6rem",
      opacity: 0,
      duration: timing.base,
    };

    if (mqLarge()) {
      delete animation.y;
      animation.x = "6rem";
    }

    tl.from(aboutMeImg, animation, "-=50%");
  }
}

if (!prefersReducedMotion()) aboutMeAnimations();
