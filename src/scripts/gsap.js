export * from "gsap";
export * from "gsap/ScrollTrigger";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animationDisabled() {
  const { matches } = window.matchMedia("(prefers-reduced-motion: reduce)");

  console.log("matches", matches);
  return matches;
}
