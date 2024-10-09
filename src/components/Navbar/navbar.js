function useNavbar() {
  const navbar = document.querySelector(".navbar");
  const body = document.querySelector("body");

  const resizeObserver = new ResizeObserver(() => {
    const navbarHeight = navbar.offsetHeight;

    body.style.setProperty("--navbar-height", `${navbarHeight}px`);
  });

  resizeObserver.observe(navbar);
}

useNavbar();
