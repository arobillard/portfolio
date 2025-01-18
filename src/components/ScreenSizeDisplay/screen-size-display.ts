function init() {
  console.log("----------------- Working in Dev Mode -----------------");
  const body = document.querySelector("body");
  const ssd = document.getElementById("dm-screen-size-display");

  if (!body || !ssd) return;

  const resizeObserver = new ResizeObserver(() => {
    ssd.textContent = `${Math.floor(body.offsetWidth / 16)}rem`;
  });

  resizeObserver.observe(body);
}

document.addEventListener("DOMContentLoaded", init);
