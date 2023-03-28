export const toStringArray = (item: string | string[] | undefined) => {
  let result = [] as string[];
  if (typeof item === "string") {
    result = item.replace(/\s/g, "").split(",");
  } else if (item) {
    result.concat(item.map((i) => i.replace(/\s/g, "")));
  }
  return result;
};
