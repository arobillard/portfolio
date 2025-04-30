export * from "gsap";
export * from "gsap/ScrollTrigger";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrub = true;
export const timing = {
  short: 0.25,
  base: 0.5,
  long: 1,
};
