export function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function applyClasses(
  initialClass: string | string[],
  additionalClass?: string | string[],
): string {
  // convert provided classes to arrays if provided as a string
  const initialAsArray: string[] =
    typeof initialClass === "string" ? initialClass.split(" ") : initialClass;
  const additionalAsArray: string[] | undefined =
    typeof additionalClass === "string"
      ? additionalClass.split(" ")
      : additionalClass;

  // merge into one array
  const combinedArray: string[] = additionalAsArray
    ? initialAsArray.concat(additionalAsArray)
    : initialAsArray;

  // join array into single string with classes separated by spaces and return
  return combinedArray.join(" ");
}

export function applyClassesConditional(
  initialClass: string | string[],
  additionalClass: string | string[],
  condition: boolean | undefined,
): string {
  if (condition) {
    return applyClasses(initialClass, additionalClass);
  } else {
    return applyClasses(initialClass);
  }
}

export function applyStyles(styles: Style[]) {
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
