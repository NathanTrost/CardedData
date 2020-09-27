export const sortAscendingByKey = (array, key) =>
  array.sort((a, b) => {
    const first = a[key];
    const second = b[key];
    if (first < second) return -1;
    if (first > second) return 1;
    return 0;
  });

export const sortDescendingByKey = (array, key) =>
  array.sort((a, b) => {
    const first = a[key];
    const second = b[key];
    if (first > second) return -1;
    if (first < second) return 1;
    return 0;
  });
