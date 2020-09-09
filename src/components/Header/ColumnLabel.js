import React from "react";
import { HeaderLabelProps } from "../../types";

const ColumnLabel = ({ children }) => (
  <strong
    className="cb-header-title"
    data-testid={`cb-header-title`}
    style={{ display: "inline-block", margin: "30px" }}
  >
    {children}
  </strong>
);

ColumnLabel.propTypes = HeaderLabelProps;

export default ColumnLabel;
