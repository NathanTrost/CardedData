import React from "react";
import { HeaderLabelProps } from "../../types";

const FilterDropdownItem = ({ children }) => (
  <strong
    className="cb-header-title"
    data-testid={`cb-header-title`}
    style={{ display: "inline-block", margin: "30px" }}
  >
    {children}
  </strong>
);

FilterDropdownItem.propTypes = HeaderLabelProps;

export default FilterDropdownItem;
