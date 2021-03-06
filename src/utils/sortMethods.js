import compareAsc from "date-fns/compareAsc";
import compareDesc from "date-fns/compareDesc";
import isValid from "date-fns/isValid";

export const sortByKey = (array, key, direction) => {
  const availableDirections = ["ASC", "DESC"];
  if (!availableDirections.includes(direction)) {
    throw new Error(
      `One of ${JSON.stringify(
        availableDirections
      )} required, instead recieved "${direction}"`
    );
  }
  const sortAsc = direction === "ASC";

  return array.sort((a, b) => {
    const first = a[key];
    const second = b[key];
    return sortByDirection(first, second, sortAsc);
  });
};

export const sortByDirection = (first, second, sortAsc) => {
  const dateComparison = sortIfDate(first, second, sortAsc);
  if (dateComparison) return dateComparison;

  // Descending and Ascending rules are inverse from eachother
  if (first < second) return sortAsc ? -1 : 1;
  if (first > second) return sortAsc ? 1 : -1;

  return 0;
};

export const sortIfDate = (first, second, sortAsc) => {
  const firstAsDate = new Date(first);
  const secondAsDate = new Date(second);

  if (isValid(firstAsDate) && isValid(secondAsDate)) {
    if (firstAsDate === secondAsDate) return 0;
    if (sortAsc) {
      return compareAsc(new Date(first), new Date(second));
    }
    return compareDesc(new Date(first), new Date(second));
  }
  return null;
};
