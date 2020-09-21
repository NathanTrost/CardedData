import React from "react";
import { HeaderLabelProps } from "../../types";

const ColumnLabel = ({ children, onFilter }) => (
  <strong
    className="header-title"
    data-testid={`header-title`}
    onClick={onFilter}
    style={{ display: "inline-block", margin: "30px" }}
  >
    {children}
  </strong>
);

ColumnLabel.propTypes = HeaderLabelProps;

export default ColumnLabel;
