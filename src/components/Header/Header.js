import React from "react";
import { HeaderProps } from "../../types";
import ColumnLabel from "./ColumnLabel";

const Header = ({ columns, onFilter }) => {
  return (
    <div className="header-row">
      {columns.map((each, index) => {
        const titleKey = `${index}-${each.id}`;
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
