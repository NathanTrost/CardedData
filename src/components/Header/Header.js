import React from "react";
import { HeaderProps } from "../../types";

const Header = ({ columns, headerDisplayType = "columnTitles" }) => {
  if (!headerDisplayType) return null;
  if (headerDisplayType === "columnTitles") {
    return (
      <div className="cb-header-row">
        {columns.map((each, index) => {
          const titleKey = `${index}-${each.id}`;
          return (
            <strong
              className="cb-header-title"
              data-testid={`cb-header-title`}
              key={titleKey}
              style={{ display: "inline-block", margin: "30px" }}
            >
              {each.title}
            </strong>
          );
        })}
      </div>
    );
  } else if (headerDisplayType === "filterDropdown") {
    return (
      <div className="cb-header-filter">
        {columns.map((each, index) => {
          const titleKey = `${index}-${each.id}`;
          return (
            <strong
              className="cb-header-title"
              data-testid={`cb-header-title`}
              key={titleKey}
              style={{ display: "inline-block", margin: "30px" }}
            >
              {each.title}
            </strong>
          );
        })}
      </div>
    );
  }
};

Header.propTypes = HeaderProps;

export default Header;
