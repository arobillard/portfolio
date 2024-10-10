import { animationDisabled, gsap } from "../../scripts/gsap";

function heroAnimations() {
  const hero_timeline = gsap.timeline();

  const hero = document.querySelector(".hero");
  const heroAnimated = hero.querySelectorAll(".hero__animated");
  const heroByline = hero.querySelector(".hero__byline");
  const first_line = hero.querySelector(".divider:first-child");
  const last_line = hero.querySelector(".divider:last-child");
  const heroLink = hero.querySelector(".hero__link");

  heroAnimated.forEach((ha, i) => {
    const pos = i === 0 ? null : "-=50%";

    hero_timeline.from(ha, { y: "6rem", opacity: 0, duration: 0.5 }, pos);
    hero_timeline.call(
      () => {
        ha.classList.remove("color-highlight");
      },
      [],
      "-=50%",
    );
  });

  hero_timeline.from(heroByline, {
    x: "6rem",
    opacity: 0,
    duration: 0.5,
  });

  hero_timeline.from(first_line, { scale: 0, duration: 1 });
  hero_timeline.from(last_line, { scale: 0, duration: 1 }, "-=100%");
  hero_timeline.from(
    heroLink,
    { y: "1rem", opacity: 0, duration: 0.5 },
    "-=100%",
  );

  const headline_timeline = gsap.timeline({ delay: 2.5, repeat: -1 });

  heroAnimated.forEach((ha, i) => {
    headline_timeline.call(() => {
      ha.classList.add("color-highlight");
    }, []);
    headline_timeline.call(
      () => {
        ha.classList.remove("color-highlight");
      },
      [],
      "+=2",
    );
  });
}

if (!animationDisabled()) heroAnimations();
