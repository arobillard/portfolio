function useToTop() {
  const toTop = document.querySelector(".to-top");
  const toTopTarget = document.getElementById("top");

  if (!(toTop instanceof Element) || !(toTopTarget instanceof Element)) return;

  function handleToTop(entries) {
    if (!entries[0].isIntersecting) {
      toTop?.classList.add("visible");
    } else {
      toTop?.classList.remove("visible");
    }
  }

  const observer = new window.IntersectionObserver(handleToTop);
  observer.observe(toTopTarget);
}

useToTop();
