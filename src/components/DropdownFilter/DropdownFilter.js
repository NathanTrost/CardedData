import React, { useState, useRef } from "react";

import { DropdownFilterProps } from "../../types";
import { useOutsideClick, useKeyedNavigation } from "../../customHooks";

import DropdownFilterOption from "./DropdownFilterOption";

import {
  StyledDropdownBtn,
  StyledDropdownContainer,
  StyledDropdown,
  StyledDropdownLabel,
  StyledDropdownListContainer,
  StyledDropdownList,
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
    <StyledDropdownContainer
      className="dropdown-container"
      data-testid={`dropdown-container`}
    >
      <StyledDropdown
        ariaLabel={`dropdown`}
        className="dropdown"
        data-testid={`dropdown`}
        id={`dropdown`}
        ref={dropdownRef}
      >
        <StyledDropdownLabel
          className="dropdown-label"
          data-testid={`dropdown-label`}
        >
          Filter By
        </StyledDropdownLabel>
        <StyledDropdownBtn
          alt={selected.title}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-labelledby="dropdown__label"
          className="dropdown-trigger"
          data-testid={`dropdown-trigger`}
          onClick={toggleDropdown}
        >
          {selected.title || "Select..."}
        </StyledDropdownBtn>
        <StyledDropdownListContainer
          className="dropdown-content"
          data-testid={`dropdown-content`}
          open={open}
        >
          <StyledDropdownList
            className="dropdown-list"
            data-testid={`dropdown-list`}
          >
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
          </StyledDropdownList>
        </StyledDropdownListContainer>
      </StyledDropdown>
    </StyledDropdownContainer>
  );
};

DropdownFilter.propTypes = DropdownFilterProps;

export default DropdownFilter;
