import { useCallback, useEffect, useState } from "react";

const useKeyedNavigation = ({ size }) => {
  const [currentFocus, setCurrentFocus] = useState(0);

  const handleKeyDown = useCallback(
    (e) => {
      const keyCodes = {
        upArrow: 38,
        downArrow: 40,
      };

      if (e.keyCode === keyCodes.downArrow) {
        e.preventDefault();
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
      } else if (e.keyCode === keyCodes.upArrow) {
        e.preventDefault();
        setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
      }
    },
    [size, currentFocus, setCurrentFocus]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [currentFocus, handleKeyDown, size]);

  return [currentFocus, setCurrentFocus];
};

export default useKeyedNavigation;
