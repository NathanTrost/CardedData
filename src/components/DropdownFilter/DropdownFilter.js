import React, { useState, useRef } from "react";

import { DropdownFilterProps } from "../../types";
import useOutsideClick from "../../customHooks/useOutsideClick";
import useKeyedNavigation from "../../customHooks/useKeyedNavigation";

import DropdownFilterOption from "./DropdownFilterOption";

import { DropdownBtn } from "../styled/Buttons";
import { Label } from "../styled/Label";
import {
  DropdownContainer,
  DropdownListContainer,
  DropdownList,
} from "../styled/Dropdown";

const DropdownFilter = ({ columns, onFilter }) => {
  const emptyOption = { id: null, title: "" };
  const options = [emptyOption].concat(columns);
  const dropdownRef = useRef();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(emptyOption);
  const [focus, setFocus] = useKeyedNavigation({
    size: options.length,
  });

  const handleBlur = () => setOpen(false);

  useOutsideClick({
    condition: open,
    element: dropdownRef,
    handler: handleBlur,
  });

  const toggleDropdown = () => setOpen(!open);

  const onSelect = (selected) => {
    setSelected(selected);
    onFilter(selected);
    toggleDropdown();
  };

  return (
    <>
      <DropdownContainer
        ariaLabel="dropdown"
        data-testid="dropdown"
        id={`dropdown`}
        ref={dropdownRef}
      >
        <Label id="dropdown__label">Filter By</Label>
        <DropdownBtn
          alt={selected.title}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-labelledby="dropdown__label"
          id={`dropdown__trigger`}
          data-testid="dropdown-trigger"
          onClick={toggleDropdown}
        >
          {selected.title || "Select..."}
        </DropdownBtn>
        <DropdownListContainer
          id={`dropdown__content`}
          data-testid="dropdown-content"
          style={{ position: "absolute", display: open ? "block" : "none" }}
        >
          <DropdownList>
            {options.map((each, index) => {
              const titleKey = `${index}-${each.id}`;
              return (
                <DropdownFilterOption
                  focus={focus === index}
                  item={each}
                  key={titleKey}
                  {...{ index, onSelect, setFocus }}
                >
                  {each.title}
                </DropdownFilterOption>
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
