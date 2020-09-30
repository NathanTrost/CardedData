import React from "react";
import { ColumnLabelProps } from "../../types";
import {
  StyledColumnLabelCell,
  StyledColumnLabelWrapper,
} from "../styled/Grid";

import { StyledSortArrowSvg } from "../styled/Svg";

const ColumnLabel = ({ children, item, onFilter }) => {
  const sortAscend = () => onFilter(item, "ASC");
  const sortDescend = () => onFilter(item, "DESC");

  return (
    <StyledColumnLabelWrapper
      className="column-label-wrapper"
      data-testid={`column-label-wrapper`}
    >
      <StyledColumnLabelCell
        className="column-label-cell"
        data-testid={`column-label-cell`}
      >
        <div className="column-label" data-testid={`column-label`}>
          {children}
        </div>
        <span>
          <StyledSortArrowSvg data-testid={`svg-arrow-up`} onClick={sortAscend}>
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </StyledSortArrowSvg>

          <StyledSortArrowSvg
            data-testid={`svg-arrow-down`}
            onClick={sortDescend}
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </StyledSortArrowSvg>
        </span>
      </StyledColumnLabelCell>
    </StyledColumnLabelWrapper>
  );
};

ColumnLabel.propTypes = ColumnLabelProps;

export default ColumnLabel;
