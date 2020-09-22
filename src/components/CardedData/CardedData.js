import React, { useState } from "react";
import { useMountingEffect } from "../../customHooks";
import { CardedDataProps } from "../../types";
import { getColumns } from "../../utils/getColumns";

import {
  StyledAppWrapper,
  StyledHeaderWrapper,
  StyledItemWrapper,
  StyledItemsWrapper,
} from "../styled/Grid";

import ColumnLabels from "../ColumnLabels";
import DropdownFilter from "../DropdownFilter";

const defaultLayoutRules = {
  displayColumnLabels: true,
  displayFilterDropdown: false,
  gridType: "columnsAsGrid",
  useGrid: true,
};

const CardedData = ({
  columnOverwrite = false,
  customColumns,
  customHeader = false,
  customMethods,
  data,
  layout = defaultLayoutRules,
}) => {
  const [columns, setColumns] = useState([]);
  const [sortedData, sortData] = useState(data);
  const layoutRules = Object.assign({}, defaultLayoutRules, layout);

  useMountingEffect(() => {
    const columns = getColumns({
      data,
      customColumns,
      customMethods,
      columnOverwrite,
    });
    setColumns(columns);
  });

  const sortAscendingByKey = (array, keyToSortBy) =>
    array.sort((a, b) => {
      if (a[keyToSortBy] < b[keyToSortBy]) return -1;
      if (a[keyToSortBy] > b[keyToSortBy]) return 1;
      return 0;
    });

  const sortDescendingByKey = (array, keyToSortBy) =>
    array.sort((a, b) => {
      if (a[keyToSortBy] > b[keyToSortBy]) return -1;
      if (a[keyToSortBy] < b[keyToSortBy]) return 1;
      return 0;
    });

  const onFilter = (select, direction) => {
    const { dataKey, filterRule } = select;

    if (filterRule) {
      const which = 0;
      console.log("onFilter", sortedData[which][dataKey]);
      const textToSearch = filterRule(sortedData[which][dataKey]);
    }

    const newData =
      direction === "ascending"
        ? sortAscendingByKey([...sortedData], dataKey)
        : direction === "descending"
        ? sortDescendingByKey([...sortedData], dataKey)
        : [...sortedData];

    sortData(newData);
  };

  const {
    displayColumnLabels,
    displayFilterDropdown,
    useGrid,
    gridLength,
  } = layoutRules;
  const { gridType } = useGrid && layoutRules;

  const shouldDisplayColumnLabels =
    gridType === "columnsAsGrid" && displayColumnLabels;
  return (
    <StyledAppWrapper className="wrapper" data-testid={`wrapper`}>
      <StyledHeaderWrapper
        className="header_wrapper"
        data-testid={`header-wrapper`}
      >
        <div className="header_wrapper-top" data-testid={"header_wrapper-top"}>
          {customHeader && (
            <div className="custom_header" data-testid={"custom-header"}>
              {customHeader}
            </div>
          )}
          {displayFilterDropdown && (
            <DropdownFilter {...{ columns, onFilter }} />
          )}
        </div>
        {shouldDisplayColumnLabels && (
          <ColumnLabels {...{ columns, onFilter }} />
        )}
      </StyledHeaderWrapper>
      <StyledItemsWrapper
        className="items_wrapper"
        data-testid={`items-wrapper`}
        useGrid={useGrid && gridType === "itemsAsGrid"}
        gridLength={gridLength}
      >
        {sortedData.map((record, index) => {
          const itemKey = `${index}-item-${record.id}`;
          return (
            <StyledItemWrapper
              className="item-wrapper"
              data-testid={`item-wrapper`}
              useGrid={useGrid}
              gridType={gridType}
              gridLength={columns.length}
              key={itemKey}
            >
              {columns.map((column, columnIndex) => {
                const columnKey = `${columnIndex}-${column.id}`;
                return (
                  <div
                    data-testid={column.id}
                    key={columnKey}
                    className={column.className}
                    // Temp styling
                    style={{
                      padding: "5px",
                      margin: "5px",
                    }}
                  >
                    {column.render(record[column.id], record)}
                  </div>
                );
              })}
            </StyledItemWrapper>
          );
        })}
      </StyledItemsWrapper>
    </StyledAppWrapper>
  );
};

CardedData.propTypes = CardedDataProps;
export default CardedData;
