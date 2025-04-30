function init() {
  console.log("----------------- Working in Dev Mode -----------------");
  const body = document.querySelector("body");
  const ssd = document.getElementById("dm-screen-size-display");

  if (!body || !ssd) return;

  const resizeObserver = new ResizeObserver(() => {
    ssd.textContent = `${Math.floor(body.offsetWidth / 16)}rem`;

    ssd.classList.add("show");

    setTimeout(() => {
      ssd.classList.remove("show");
    }, 2000);
  });

  resizeObserver.observe(body);
}

document.addEventListener("DOMContentLoaded", init);
