const sortLastNameFirst = (dataArray, direction) => {
  // This is currently only wired up for ascending, so the 'direction' param is not yet used
  const splitNames = (name) => {
    if (!name) return { first: null, last: null };
    const fullName = name.trim();
    const first = fullName.substring(0, fullName.lastIndexOf(" "));
    const last = fullName.substring(first.length).trim();
    return { first, last };
  };

  const sortAsc = direction === "ASC";
  const sorted = dataArray.sort((a, b) => {
    const aName = splitNames(a.artist);
    const bName = splitNames(b.artist);
    if (aName.last === bName.last) {
      if (aName.first < bName.first) return sortAsc ? -1 : 1;
      if (aName.first > bName.first) return sortAsc ? 1 : -1;
    }
    if (aName.last < bName.last) return sortAsc ? -1 : 1;
    if (aName.last > bName.last) return sortAsc ? 1 : -1;
    return 0;
  });

  if (direction === "ASC") return sorted;
  if (direction === "DESC") return sorted.reverse();
};

export default sortLastNameFirst;
