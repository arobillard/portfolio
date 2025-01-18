import { gsap } from "../../scripts/gsap";
import {
  mqLarge,
  mqMedium,
  prefersReducedMotion,
} from "../../scripts/mediaCheckers";

function aboutMeAnimations() {
  const aboutMe = document.querySelector(".about-me");
  const aboutMeContent = aboutMe.querySelector(".about-me__content");
  const aboutMeImg = aboutMe.querySelector(".about-me__img img");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutMe,
      // scrub: true,
      start: "top-=50 center",
      end: "center center",
      // markers: true,
    },
  });

  if (!mqMedium()) {
    tl.from(aboutMeImg, { y: "6rem", opacity: 0, duration: 0.5 });
  }

  const scrollItems = aboutMe.querySelectorAll(".scroll-item");

  scrollItems.forEach((item, i) => {
    const pos = item.classList.contains("scroll-item--grouped") ? "<" : "-=50%";
    tl.from(
      item,
      { y: "6rem", opacity: 0, duration: 0.5 },
      i !== 0 ? pos : null,
    );
  });

  if (mqMedium()) {
    const animation = { y: "6rem", opacity: 0, duration: 0.5 };

    if (mqLarge()) {
      delete animation.y;
      animation.x = "6rem";
    }

    tl.from(aboutMeImg, animation, "-=50%");
  }
}

if (!prefersReducedMotion()) aboutMeAnimations();
