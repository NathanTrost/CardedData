import React from "react";
import { HeaderProps } from "../../types";
import ColumnLabel from "./ColumnLabel";
import FilterDropdownItem from "./FilterDropdownItem";

const Header = ({ columns, headerDisplayType = "columnTitles" }) => {
  if (!headerDisplayType) return null;

  return (
    <div className="cb-header-row">
      {columns.map((each, index) => {
        const titleKey = `${index}-${each.id}`;

        if (headerDisplayType === "columnTitles") {
          return <ColumnLabel key={titleKey}>{each.title}</ColumnLabel>;
        } else if (headerDisplayType === "filterDropdown") {
          return (
            <FilterDropdownItem key={titleKey}>{each.title}</FilterDropdownItem>
          );
        }
      })}
    </div>
  );
};

Header.propTypes = HeaderProps;

export default Header;
