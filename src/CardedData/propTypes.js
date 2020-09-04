import PropTypes from "prop-types";

const allKeysAreFunctions = (obj) => {
  if (Object.keys(obj).some((key) => typeof key !== "function")) {
    return new Error("Validation failed!");
  }
};

export const CardedDataProps = {
  columnOverwrite: PropTypes.bool,
  customColumns: PropTypes.oneOf([PropTypes.array, PropTypes.func]),
  customMethods: PropTypes.objectOf(allKeysAreFunctions),
  data: PropTypes.array,
};
