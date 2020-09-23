import React from "react";
import { HeaderLabelProps } from "../../types";

const FilterDropdownItem = ({ children, onFilter }) => (
  <strong
    className="header-title"
    data-testid={`header-title`}
    onClick={onFilter}
    style={{ display: "inline-block", margin: "30px" }}
  >
    {children}
  </strong>
);

FilterDropdownItem.propTypes = HeaderLabelProps;

export default FilterDropdownItem;
