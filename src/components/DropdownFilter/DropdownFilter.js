import React, { useState } from "react";
import { DropdownFilterProps } from "../../types";

import useOutsideClick from "../../customHooks/onOutsideClick";

import { DropdownBtn } from "../styled/Buttons";
import { Label } from "../styled/Label";
import {
  DropdownContainer,
  DropdownListContainer,
  DropdownList,
  DropdownItem,
} from "../styled/Dropdown";

const DropdownFilter = ({ columns, onFilter }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleBlur = (event) => setOpen(false);

  useOutsideClick({
    condition: open,
    element: dropdownRef,
    handler: handleBlur,
  });

  const toggleDropdown = () => setOpen(!open);

  const onSelect = (event) => {
    setSelected(event.currentTarget.dataset.value);
    toggleDropdown();
    onFilter();
  };

  return (
    <>
      <Label id="dropdown__label">Filter By</Label>
      <DropdownContainer
        ariaLabel="dropdown"
        data-testid="dropdown"
        id={`dropdown`}
        styles={{ display: "inlineBlock" }}
      >
        <DropdownBtn
          alt={selected}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-labelledby="dropdown__label"
          id={`dropdown__trigger`}
          data-testid="dropdown-trigger"
          onClick={toggleDropdown}
        >
          {selected || "Select..."}
        </DropdownBtn>
        <DropdownListContainer
          id={`dropdown__content`}
          data-testid="dropdown-content"
          style={{ position: "absolute", display: open ? "block" : "none" }}
        >
          <DropdownList>
            {[{ id: null, title: "" }].concat(columns).map((each, index) => {
              const titleKey = `${index}-${each.id}`;
              return (
                <DropdownItem
                  data-testid="dropdown-item"
                  data-value={each.title}
                  id={`dropdown__item`}
                  key={titleKey}
                  onClick={onSelect}
                >
                  {each.title}
                </DropdownItem>
              );
            })}
          </DropdownList>
        </DropdownListContainer>
      </DropdownContainer>
    </>
  );
};

DropdownFilter.propTypes = DropdownFilterProps;

export default DropdownFilter;
