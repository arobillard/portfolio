import { gsap } from "../../scripts/gsap";
import { prefersReducedMotion } from "../../scripts/mediaCheckers";

function pageHeaderAnimations() {
  const pageHeader = document.querySelector(".page-header");
  if (!(pageHeader instanceof Element)) return;

  const phTitle = pageHeader.querySelector(".page-header__title");
  const phDivider = pageHeader.querySelector(".divider");
  const phByline = pageHeader.querySelector(".page-header__byline");

  const ph_timeline = gsap.timeline();

  ph_timeline.from(phTitle, {
    y: "-6rem",
    opacity: 0,
    duration: 1,
    delay: 1,
  });
  ph_timeline.from(
    phDivider,
    {
      scaleX: 0,
      opacity: 0,
      duration: 1,
    },
    "-=50%",
  );
  ph_timeline.from(
    phByline,
    {
      x: "6rem",
      opacity: 0,
      duration: 1,
    },
    "-=75%",
  );
}

if (!prefersReducedMotion()) pageHeaderAnimations();
