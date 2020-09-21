import React from "react";
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

const CardedData = ({
  columnOverwrite = false,
  customColumns,
  customHeader = false,
  customMethods,
  data,
  layout = {
    displayColumnLabels: true,
    displayFilterDropdown: false,
    gridType: "columnsAsGrid",
    useGrid: true,
  },
}) => {
  const columns = getColumns({
    data,
    customColumns,
    customMethods,
    columnOverwrite,
  });

  const onFilter = (select) => {
    console.log(select);
  };

  const { displayColumnLabels, displayFilterDropdown, useGrid } = layout;
  const { gridType } = useGrid && layout;

  const shouldDisplayColumnLabels =
    gridType === "columnsAsGrid" && displayColumnLabels;

  return (
    <StyledAppWrapper className="wrapper" data-testid={`wrapper`}>
      <StyledHeaderWrapper
        className="header-wrapper"
        data-testid={`header-wrapper`}
      >
        <div
          className="secondary-header-wrapper"
          data-testid={"secondary-header-wrapper"}
          style={{ overflow: "auto", width: "100%" }}
        >
          {customHeader && (
            <div className="custom-header" data-testid={"custom-header"}>
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
        className="items-wrapper"
        data-testid={`items-wrapper`}
        useGrid={useGrid && gridType === "itemsAsGrid"}
        gridLength={layout.gridLength}
      >
        {data.map((record, index) => {
          const itemKey = `${index}-item-${record.id}`;
          return (
            <StyledItemWrapper
              className="item-wrapper"
              data-testid={`item-wrapper`}
              useGrid={useGrid && gridType === "columnsAsGrid"}
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
                    style={{
                      float: "left",
                      backgroundColor: "#DDD",
                      boxSizing: "border-box",
                      padding: "5px",
                      margin: "5px",
                    }}
                    onFilter={onFilter}
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
