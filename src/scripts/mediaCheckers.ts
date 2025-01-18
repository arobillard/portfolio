export function mq(size) {
  return window.matchMedia(`(min-width: ${size})`).matches;
}

export function mqMedium() {
  return mq(`45rem`);
}

export function mqLarge() {
  return mq(`60rem`);
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
