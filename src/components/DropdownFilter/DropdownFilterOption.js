import React, { useEffect, useRef, useCallback } from "react";
import { DropdownItem } from "../styled/Dropdown";

const DropdownFilterOption = ({ focus, index, setFocus, title }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (focus) {
      // Move element into view when it is focused
      ref.current.focus();
    }
  }, [focus]);

  const handleSelect = useCallback(() => {
    alert(`${title}`);
    setFocus(index);
  }, [title, index, setFocus]);

  return (
    <DropdownItem
      data-testid="dropdown-item"
      data-value={title}
      id={`dropdown__item`}
      onClick={handleSelect}
      onKeyPress={handleSelect}
      role="button"
      ref={ref}
      tabIndex={focus ? 0 : -1}
    >
      {title}
    </DropdownItem>
  );
};

export default DropdownFilterOption;
