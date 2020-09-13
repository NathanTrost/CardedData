import React from "react";
import { HeaderProps } from "../../types";
import ColumnLabel from "./ColumnLabel";
import FilterDropdownItem from "./FilterDropdownItem";

const Header = ({ columns, headerType, onFilter }) => {
  return (
    <div className="header-row">
      {columns.map((each, index) => {
        const titleKey = `${index}-${each.id}`;

        if (headerType === "filterDropdown") {
          return (
            <FilterDropdownItem key={titleKey} onFilter={onFilter}>
              {each.title}
            </FilterDropdownItem>
          );
        }

        return (
          <ColumnLabel key={titleKey} onFilter={onFilter}>
            {each.title}
          </ColumnLabel>
        );
      })}
    </div>
  );
};

Header.propTypes = HeaderProps;

export default Header;
