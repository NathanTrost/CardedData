import React from "react";

export const getDefaultColumns = (data) => {
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

export const combinedColumns = (defaultColumns, customColumns) => {
  // First merge overwrite rules based on column.id match,
  // (position, title, etc) from custom to defaults, then
  // filter out removed columns
  const defaultsMerged = defaultColumns.map((each) => {
    const matchingColumn = customColumns.find(
      (column) => column.id === each.id
    );
    if (matchingColumn) return Object.assign({}, each, matchingColumn);
    return each;
  });

  // Filter out columns from custom that have already been applied to defaults
  const customFiltered = customColumns.filter((each) => {
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

export const getColumns = ({
  data,
  customColumns,
  commonFunctions,
  columnOverwrite,
}) => {
  if (!customColumns) return getDefaultColumns(data);
  if (columnOverwrite && customColumns) return customColumns(commonFunctions);

  const getCustomColumns =
    typeof customColumns === "object"
      ? customColumns
      : customColumns(commonFunctions);

  return combinedColumns(getDefaultColumns(data), getCustomColumns);
};
