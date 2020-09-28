import React from "react";
import { ColumnLabelProps } from "../../types";
import { StyledColumnLabel } from "../styled/Grid";

const ColumnLabel = ({ children, item, onFilter }) => {
  const sortAscend = () => onFilter(item, "ASC");
  const sortDescend = () => onFilter(item, "DESC");

  return (
    <StyledColumnLabel
      className="column-label"
      data-testid={`column-label`}
      onClick={onFilter}
    >
      {children}
      <span>
        <svg data-testid={`svg-arrow-up`} onClick={sortAscend}>
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        </svg>

        <svg data-testid={`svg-arrow-down`} onClick={sortDescend}>
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </span>
    </StyledColumnLabel>
  );
};

ColumnLabel.propTypes = ColumnLabelProps;

export default ColumnLabel;
