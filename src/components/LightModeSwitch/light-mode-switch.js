function useLightModeToggle() {
  const html = document.querySelector("html");
  const lightModeToggle = document.getElementById("light-mode-toggle");

  function updateTheme(lightModeActive) {
    if (lightModeActive) {
      html.classList.add("light-mode");
    } else {
      html.classList.remove("light-mode");
    }
  }

  function checkLightMode() {
    const lightModeActive = JSON.parse(localStorage.getItem("ar-light-mode"));

    updateTheme(lightModeActive);

    if (lightModeActive) {
      lightModeToggle.checked = true;
    }
  }

  checkLightMode();

  function handleLightModeToggle(e) {
    const active = e.currentTarget.checked;

    localStorage.setItem("ar-light-mode", active);

    updateTheme(active);
  }

  lightModeToggle.addEventListener("change", handleLightModeToggle);
}

useLightModeToggle();
