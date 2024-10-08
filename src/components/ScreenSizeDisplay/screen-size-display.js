function init() {
  console.log("----------------- Working in Dev Mode -----------------");
  const body = document.querySelector("body");

  function ScreenSizeDisplay(display) {
    function getScreenWidth() {
      return `${Math.floor(body.offsetWidth / 16)}rem`;
    }

    const resizeObserver = new ResizeObserver(() => {
      display.textContent = getScreenWidth();
    });

    resizeObserver.observe(body);
  }

  const ssd = document.getElementById("dm-screen-size-display");
  ScreenSizeDisplay(ssd);
}

document.addEventListener("DOMContentLoaded", init);
