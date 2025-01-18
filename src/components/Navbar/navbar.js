import { gsap } from "../../scripts/gsap";
import { prefersReducedMotion } from "../../scripts/mediaCheckers";

function useNavbar() {
  const navbar = document.querySelector(".navbar");
  const body = document.querySelector("body");

  const resizeObserver = new ResizeObserver(() => {
    const navbarHeight = navbar.offsetHeight;

    body.style.setProperty("--navbar-height", `${navbarHeight}px`);
  });

  resizeObserver.observe(navbar);

  function navbarAnimations() {
    navbar.classList.add("out");
    const navbar_timeline = gsap.timeline({ delay: 2 });
    navbar_timeline.call(() => {
      navbar.classList.remove("out");
    });
  }

  // TODO: look into making this only play when hero is in view on page load?
  // presumably an intersection observer
  // if (!prefersReducedMotion()) navbarAnimations();
}

useNavbar();
