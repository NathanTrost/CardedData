import compareAsc from "date-fns/compareAsc";
import compareDesc from "date-fns/compareDesc";
import isValid from "date-fns/isValid";

export const validateSortType = (direction) => {
  const availableDirections = ["ASC", "DESC"];
  if (!availableDirections.includes(direction)) {
    throw new Error(
      `One of ${JSON.stringify(
        availableDirections
      )} required, instead recieved "${direction}"`
    );
  }
};

export const sortByKey = (array, key, direction) => {
  validateSortType(direction);
  return array.sort((a, b) =>
    sortEachByDirection(a[key], b[key], direction === "ASC")
  );
};

export const sortEachByDirection = (first, second, sortAsc) => {
  const dateComparison = sortEachIfDate(first, second, sortAsc);
  if (dateComparison) return dateComparison;

  // Push non-values to bottom of sort
  if (!first) return 0;
  if (!second) return -1;

  // Descending and Ascending rules are inverse from eachother
  if (first < second) return sortAsc ? -1 : 1;
  if (first > second) return sortAsc ? 1 : -1;

  return 0;
};

export const sortEachIfDate = (first, second, sortAsc) => {
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
