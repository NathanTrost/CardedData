import React, { useState } from "react";
import classNames from "classnames";
import { DropdownFilterProps } from "../../types";

import "./dropdownFilterStyle.css";

const DropdownFilter = ({ columns, onFilter }) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen(!open);
  const onSelect = () => {
    toggleDropdown();
    onFilter();
  };

  return (
    <div className={classNames(["dropdown", open && "dropdown--active"])}>
      <button className="dropdown__trigger" onClick={toggleDropdown}>
        Filter By
      </button>
      <div className="dropdown__content">
        <ul>
          {columns.map((each, index) => {
            const titleKey = `${index}-${each.id}`;

            return (
              <li key={titleKey} onClick={onSelect}>
                {each.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

DropdownFilter.propTypes = DropdownFilterProps;

export default DropdownFilter;
