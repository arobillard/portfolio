export function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function combineClasses(classList) {
  return classList.join(" ");
}

export function combineStyles(styles) {
  if (!styles?.length) return null;

  let styleString = "";

  styles.forEach((s) => {
    if (styleString !== "") {
      styleString = `${styleString} `;
    }

    styleString = `${styleString}${s.prop}: ${s.value};`;
  });

  return styleString;
}
