function init() {
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

    body.style.setProperty(
      "--color-highlight",
      `hsl(${updatedHValue}, 38%, 62%)`,
    );
  }

  setInterval(() => {
    setHighlightColor();
  }, 100);
}

document.addEventListener("DOMContentLoaded", init);
