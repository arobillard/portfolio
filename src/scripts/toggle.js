import { wait } from "./helpers";

async function Toggle(tog) {
  if (!(tog instanceof Element)) return;

  const target = document.getElementById(tog.getAttribute("aria-controls"));
  const middle = tog.querySelector(".middle");
  const navItems = target.querySelectorAll("a");

  async function itemsIn() {
    for (const item of navItems) {
      await wait(50);
      item.classList.add("in");
      item.setAttribute("tabindex", 0);
    }
  }

  async function itemsOut() {
    for (const item of navItems) {
      item.classList.remove("in");
      item.setAttribute("tabindex", -1);
    }
  }

  async function open() {
    tog.classList.add("transition-open");
    await wait(500);
    middle.setAttribute("hidden", true);
    tog.setAttribute("aria-expanded", true);
    tog.classList.remove("transition-open");
    target.classList.add("open");
    itemsIn();
  }

  async function close() {
    tog.classList.add("transition-close");
    itemsOut();
    target.classList.remove("open");
    await wait(500);
    middle.removeAttribute("hidden");
    tog.setAttribute("aria-expanded", false);
    tog.classList.remove("transition-close");
  }

  tog.addEventListener("click", () => {
    if (tog.getAttribute("aria-expanded") === "true") {
      close();
    } else {
      open();
    }
  });
}

const toggle = document.querySelector(".toggle");
Toggle(toggle);
