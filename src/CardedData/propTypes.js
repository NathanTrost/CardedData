import PropTypes from "prop-types";

const allKeysAreFunctions = (obj) => {
  if (Object.keys(obj).some((key) => typeof key !== "function")) {
    return new Error("Validation failed!");
  }
};

export const CardedDataProps = {
  columnOverwrite: PropTypes.bool,
  customColumns: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        dataIndex: PropTypes.string,
        id: PropTypes.string.isRequired,
        position: PropTypes.number.isRequired,
        title: PropTypes.string,
        render: PropTypes.oneOf([PropTypes.node, PropTypes.func]),
      })
    ),
    PropTypes.func, // Function should return the same shape as above, it just accepts function params
  ]),
  customMethods: PropTypes.objectOf(allKeysAreFunctions),
  data: PropTypes.array.isRequired,
};
