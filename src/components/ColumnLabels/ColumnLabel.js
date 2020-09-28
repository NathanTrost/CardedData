import React from "react";
import { ColumnLabelProps } from "../../types";
import { StyledColumnLabel } from "../styled/Grid";

const ColumnLabel = ({ children, onFilter }) => (
  <StyledColumnLabel
    className="column-label"
    data-testid={`column-label`}
    onClick={onFilter}
  >
    {children}
  </StyledColumnLabel>
);

ColumnLabel.propTypes = ColumnLabelProps;

export default ColumnLabel;
