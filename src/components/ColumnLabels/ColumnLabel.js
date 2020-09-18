import React from "react";
import { HeaderLabelProps } from "../../types";
import { Label } from "../styled/Label";

const ColumnLabel = ({ children, onFilter }) => (
  <Label
    className="header-title"
    data-testid={`header-title`}
    onClick={onFilter}
  >
    {children}
  </Label>
);

ColumnLabel.propTypes = HeaderLabelProps;

export default ColumnLabel;
