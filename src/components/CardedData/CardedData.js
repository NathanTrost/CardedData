import React, { useState } from "react";
import classNames from "classnames";

import { useMountingEffect } from "../../customHooks";
import { sortByKey } from "../../utils/sortMethods";
import { CardedDataProps } from "../../types";
import { getColumns } from "../../utils/getColumns";

import {
  StyledAppWrapper,
  StyledHeaderWrapper,
  StyledItemWrapper,
  StyledItemsWrapper,
  StyledCellWrapper,
} from "../styled/Grid";

import ColumnLabels from "../ColumnLabels";
import DropdownFilter from "../DropdownFilter";

const CardedData = ({
  columnOverwrite = false,
  customColumns,
  customHeader = false,
  customMethods,
  data,
  layout = {},
}) => {
  const defaultLayoutRules = {
    displayColumnLabels: true,
    displayFilterDropdown: false,
    gridType: "columnsAsGrid",
    useGrid: true,
  };

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

  const onFilter = (select, direction) => {
    const { dataKey, filterRule } = select;

    if (filterRule) {
      // Override general sort if filterRule is provided
      const newData = filterRule([...sortedData], direction);
      return sortData(newData);
    }

    const newData = sortByKey([...sortedData], dataKey, direction);
    return sortData(newData);
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
        <div className="header_wrapper-top" data-testid={`header_wrapper-top`}>
          {customHeader && (
            <div className="custom_header" data-testid={`custom-header`}>
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
                  <StyledCellWrapper
                    className={classNames(["cell-wrapper", column.className])}
                    data-testid={`cell-wrapper-${column.id}`}
                    key={columnKey}
                  >
                    {column.render(record[column.id], record)}
                  </StyledCellWrapper>
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
