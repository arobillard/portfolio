import { gsap } from "../../scripts/gsap";
import { prefersReducedMotion } from "../../scripts/mediaCheckers";

function useNavbar() {
  const navbar = <HTMLElement>document.querySelector(".navbar");
  const body = document.querySelector("body");

  if (!navbar || !body) return;

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

  const isAtTop = window.scrollY < 50;
  const flaggedToAnimate = navbar.classList.contains("navbar--animate");

  if (!prefersReducedMotion() && isAtTop) navbarAnimations();
}

useNavbar();
