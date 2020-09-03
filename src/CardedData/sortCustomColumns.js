const getDefaultColumns = (data) => {
  const flattenedKeys = data.flatMap((each) => Object.keys(each));
  const uniqueKeys = [...new Set(flattenedKeys)];
  return uniqueKeys.map((each, key) => {
    const column = {
      dataIndex: each,
      id: each,
      position: key * 100,
      title: each,
      render: (text, record) => <div>{text}</div>,
    };
    return column;
  });
};

const combinedColumns = (defaultColumn, customColumn) => {
  // First merge overwrite rules based on column.id match,
  // (position, title, etc) from custom to defaults, then
  // filter out removed columns
  const defaultsMerged = defaultColumn.map((each) => {
    const matchingColumn = customColumn.find((column) => column.id === each.id);
    if (matchingColumn) return Object.assign({}, each, matchingColumn);
    return each;
  });

  // Filter out columns from custom that have already been applied to defaults
  const customFiltered = customColumn.filter((each) => {
    const columnExistsInDefaults = defaultsMerged.find(
      (column) => column.id === each.id
    );
    return !columnExistsInDefaults;
  });

  const combinedArray = [...defaultsMerged, ...customFiltered]
    .sort((a, b) => (a.position > b.position ? 1 : -1))
    .filter((each) => each.position >= 0);
  return combinedArray;
};

const getColumns = () => {
  if (!columnOverwrite) return getDefaultColumns(onCustomerSelect);
  if (typeof columnOverwrite === "function") {
    return combinedColumns(
      getDefaultColumns(onCustomerSelect),
      columnOverwrite(onCustomerSelect)
    );
  } else if (typeof columnOverwrite === "object") {
    return combinedColumns(
      getDefaultColumns(onCustomerSelect),
      columnOverwrite
    );
  }
};
