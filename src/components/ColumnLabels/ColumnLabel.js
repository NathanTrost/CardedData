import React from "react";
import { HeaderLabelProps } from "../../types";
import { StyledColumnLabel } from "../styled/Label";

const ColumnLabel = ({ children, onFilter }) => (
  <StyledColumnLabel
    className="columnLabel"
    data-testid={`columnLabel`}
    onClick={onFilter}
  >
    {children}
  </StyledColumnLabel>
);

ColumnLabel.propTypes = HeaderLabelProps;

export default ColumnLabel;
