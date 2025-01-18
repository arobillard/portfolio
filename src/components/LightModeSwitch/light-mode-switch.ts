function useLightModeToggle() {
  const html = document.querySelector("html");
  const lightModeToggle = <HTMLInputElement>(
    document.getElementById("light-mode-toggle")
  );

  function updateTheme(lightModeActive) {
    if (!html) return;

    if (lightModeActive) {
      html.classList.add("light-mode");
    } else {
      html.classList.remove("light-mode");
    }
  }

  function checkLightMode() {
    if (!lightModeToggle) return;

    const lightModeActive: boolean = JSON.parse(
      localStorage.getItem("ar-light-mode") || "",
    );

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
