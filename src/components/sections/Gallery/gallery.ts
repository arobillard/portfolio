import { gsap, scrub, timing } from "../../../scripts/gsap";
import { prefersReducedMotion } from "../../../scripts/mediaCheckers";

function Gallery(ig: Element) {
  if (!(ig instanceof Element)) return;

  function getImageButtons() {
    return Array.from(ig.querySelectorAll(".gallery__view")) as HTMLElement[];
  }

  const lightbox = ig.querySelector(".gallery__lightbox");
  const figure_img = ig.querySelector(".gallery__lightbox-image");
  const figcaption = ig.querySelector(".gallery__figcaption");
  const close = ig.querySelector(".gallery__close") as HTMLElement;
  const prev = ig.querySelector(".gallery__prev") as HTMLElement;
  const next = ig.querySelector(".gallery__next") as HTMLElement;

  const img_buttons = getImageButtons();

  if (
    !lightbox ||
    !figure_img ||
    !figcaption ||
    !close ||
    !prev ||
    !next ||
    img_buttons.length === 0
  )
    return;

  function changeImage(index: number) {
    const ibs = getImageButtons();

    const classes_to_remove = ["active", "next", "prev"];

    for (const ib of ibs) {
      ib.classList.remove(...classes_to_remove);
    }

    const selected_img = ibs[index];
    const prev_img = ibs[index - 1] || ibs[ibs.length - 1];
    const next_img = ibs[index + 1] || ibs[0];

    selected_img.classList.add("active");
    prev_img.classList.add("prev");
    next_img.classList.add("next");

    const src = selected_img.dataset.src;
    const caption = selected_img.dataset.caption;

    figure_img && src && figure_img?.setAttribute("src", src);
    if (figcaption && caption) figcaption.textContent = caption;
  }

  function keyActions(e: KeyboardEvent) {
    if (e.key === "ArrowLeft") {
      prevImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "Escape") {
      closeLightBox();
    }
  }

  function openLightBox(e: Event) {
    const target = e.target as HTMLElement;

    const index = getImageButtons().indexOf(target);

    changeImage(index);

    lightbox?.classList.add("active");
    ig.addEventListener("keydown", keyActions);
    [close, prev, next].forEach((btn) => btn?.setAttribute("tabindex", "0"));
    next?.focus();
  }

  function closeLightBox() {
    lightbox?.classList.remove("active");
    ig.removeEventListener("keydown", keyActions);
    [close, prev, next].forEach((btn) => btn?.setAttribute("tabindex", "-1"));
  }

  function nextImage() {
    const ibs = getImageButtons();
    const next_index = ibs.findIndex((ib) => ib.classList.contains("next"));

    changeImage(next_index < ibs.length ? next_index : 0);
  }

  function prevImage() {
    const ibs = getImageButtons();
    const next_index = ibs.findIndex((ib) => ib.classList.contains("prev"));

    changeImage(next_index >= 0 ? next_index : ibs.length - 1);
  }

  img_buttons.forEach((btn) => btn.addEventListener("click", openLightBox));
  close.addEventListener("click", closeLightBox);
  prev.addEventListener("click", prevImage);
  next.addEventListener("click", nextImage);

  // animations
  function galleryAnimations() {
    const scTitle = ig.querySelector(".section__title");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ig,
        scrub: scrub,
        start: "top 50%",
        end: "center center",
        // markers: true,
      },
    });

    tl.from(scTitle, { x: "6rem", opacity: 0, duration: timing.short });

    const scrollItems = ig.querySelectorAll(".scroll-item");

    scrollItems.forEach((item) => {
      const pos = item.classList.contains("scroll-item--grouped")
        ? "<"
        : "-=50%";
      tl.from(item, { y: "6rem", opacity: 0, duration: timing.short }, pos);
    });
  }

  if (!prefersReducedMotion()) galleryAnimations();
}

const galleries = document.querySelectorAll(".gallery");

galleries.forEach((ig) => Gallery(ig));
