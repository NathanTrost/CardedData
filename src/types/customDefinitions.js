export const AllItemsAreFunctions = (obj) => {
  if (Object.keys(obj).some((key) => typeof key !== "function")) {
    return new Error("Validation failed!");
  }
};
