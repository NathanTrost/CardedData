const filterLastNameFirst = (dataArray, direction) => {
  // This is currently only wired up for ascending, so the 'direction' param is not yet used
  const splitNames = (name) => {
    if (!name) return { first: null, last: null };
    const fullName = name.trim();
    const first = fullName.substring(0, fullName.lastIndexOf(" "));
    const last = fullName.substring(first.length).trim();
    return { first, last };
  };

  return dataArray.sort((a, b) => {
    const aName = splitNames(a.artist);
    const bName = splitNames(b.artist);
    if (aName.last === bName.last) {
      if (aName.first < bName.first) return -1;
      if (aName.first > bName.first) return 1;
    }
    if (aName.last < bName.last) return -1;
    if (aName.last > bName.last) return 1;
    return 0;
  });
};

export default filterLastNameFirst;
