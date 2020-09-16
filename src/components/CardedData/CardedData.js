import React from "react";
import { CardedDataProps } from "../../types";
import { getColumns } from "../../utils/getColumns";
import Header from "../Header";
import DropdownFilter from "../DropdownFilter";

const CardedData = ({
  columnOverwrite = false,
  customColumns,
  customMethods,
  data,
  displayColumnHeader = true,
  displayFilterDropdown = false,
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

  return (
    <div className="wrapper" data-testid={`wrapper`}>
      <div
        className="header-wrapper"
        style={{ display: "block", width: "100%" }}
      >
        {displayColumnHeader && <Header {...{ columns, onFilter }} />}
        {displayFilterDropdown && <DropdownFilter {...{ columns, onFilter }} />}
      </div>
      <div
        className="items-wrapper"
        data-testid={`items-wrapper`}
        style={{ display: "block", width: "100%" }}
      >
        {data.map((record, index) => {
          const itemKey = `${index}-item-${record.id}`;
          return (
            <div
              className="item-wrapper"
              data-testid={`item-wrapper`}
              key={itemKey}
              style={{
                margin: "10px",
                padding: "10px",
                border: "1px solid black",
                display: "block",
                boxSizing: "border-box",
                overflow: "auto",
              }}
            >
              {columns.map((column, columnIndex) => {
                // Shape of column data
                // {
                //   position: 0,
                //   id: "title",
                //   title: "Title",
                //   className: "col-title",
                //   dataIndex: "title",
                //   render: (text, record) => <div>{text}</div>,
                // },

                const columnKey = `${columnIndex}-${column.id}`;
                return (
                  <div
                    data-testid={column.id}
                    key={columnKey}
                    className={column.className}
                    style={{
                      float: "left",
                      backgroundColor: "#C3C3C3",
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

CardedData.propTypes = CardedDataProps;
export default CardedData;
