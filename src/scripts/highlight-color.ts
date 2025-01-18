import { prefersReducedMotion } from "./mediaCheckers";

function init() {
  if (prefersReducedMotion()) return;
  const body = document.querySelector("body");

  function setHighlightColor() {
    const currentPropValue = body.style.getPropertyValue("--color-highlight");

    const currentHValue = parseFloat(
      currentPropValue.split(", ")[0].substring(4),
    );

    let updatedHValue = currentHValue + 1;

    if (updatedHValue > 360) {
      updatedHValue = updatedHValue - 360;
    }

    let lightness = 62;
    if (window.matchMedia("prefers-color-scheme: light").matches) {
      console.log("light");
      lightness = 40;
    }

    body.style.setProperty(
      "--color-highlight",
      `hsl(${updatedHValue}, 38%, ${lightness}%)`,
    );
  }

  setInterval(() => {
    setHighlightColor();
  }, 100);
}

document.addEventListener("DOMContentLoaded", init);
