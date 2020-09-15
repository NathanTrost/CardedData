import { useEffect } from "react";

/**
 * @param {boolean} condition - Condition if true adds handler to event
 * @param element - Reference to element to watch for outside click
 * @param handler- Single function you wish to run on outside click
 */

const useOutsideClick = ({ condition, element, handler }) => {
  useEffect(() => {
    const listener = (event) => {
      if (element.current && !element.current.contains(event.target)) {
        handler(event);
      }
    };

    if (condition) {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }
  }, [condition, element, handler]);
};

export default useOutsideClick;
