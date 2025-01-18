export function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function combineClasses(
  classes: string[] | string,
  additionalClasses?: string[] | string,
): string {
  if (!classes) return "";

  if (typeof classes === "string") {
    if (!additionalClasses) return classes;

    if (typeof additionalClasses === "string")
      return `${classes} ${additionalClasses}`;
  }

  const updatedClassesArray = [...classes];

  if (additionalClasses) {
    if (typeof additionalClasses === "string") {
      updatedClassesArray.push(additionalClasses);
    } else {
      updatedClassesArray.forEach((c) => {
        updatedClassesArray.push(c);
      });
    }
  }

  return updatedClassesArray.join(" ");
}

export function combineStyles(styles: Style[]) {
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

export function objectSorter<T>(a: T, b: T): number {
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
