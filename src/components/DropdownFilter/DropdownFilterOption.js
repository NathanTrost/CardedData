import React, { useEffect, useRef } from "react";
import { DropdownFilterOptionProps } from "../../types";
import { StyledDropdownItem } from "../styled/Dropdown";

const DropdownFilterOption = ({ focus, index, onSelect, setFocus, item }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    if (focus) itemRef.current.focus();
  }, [focus]);

  const handleSelect = () => {
    setFocus(index);
    onSelect(item);
  };

  return (
    <StyledDropdownItem
      data-testid="dropdown-item"
      data-item={item}
      id={`dropdown__item`}
      onClick={handleSelect}
      onKeyPress={handleSelect}
      role="button"
      ref={itemRef}
      tabIndex={focus ? 0 : -1}
    >
      {item.title}
    </StyledDropdownItem>
  );
};

DropdownFilterOption.propTypes = DropdownFilterOptionProps;

export default DropdownFilterOption;
