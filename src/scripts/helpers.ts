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

export function objectSorter(a, b) {
  const valueA = a; // ignore upper and lowercase
  const valueB = b; // ignore upper and lowercase
  if (valueA < valueB) {
    return -1;
  }
  if (valueA > valueB) {
    return 1;
  }
  return 0;
}

export function dateFormat(
  dateString: Date,
  format?: {
    year?: "numeric" | "2-digit" | undefined;
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
    day?: "numeric" | "2-digit" | undefined;
    lang?: "en-CA" | "fr-CA";
  },
) {
  return new Intl.DateTimeFormat(format?.lang || "en-CA", {
    year: format?.year || "numeric",
    month: format?.month || "long",
    day: format?.day,
    timeZone: "UTC",
  }).format(dateString);
}
