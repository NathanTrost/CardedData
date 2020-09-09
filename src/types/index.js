import {
  array,
  arrayOf,
  bool,
  func,
  node,
  number,
  objectOf,
  oneOf,
  oneOfType,
  shape,
  string,
} from "prop-types";
import { allKeysAreFunctions } from "./customDefinitions";

export const HeaderProps = {
  columnOverwrite: bool,
  headerDisplayType: oneOf(["columnTitles", "filterDropdown", null]),
};

export const CardedDataProps = {
  customColumns: oneOfType([
    arrayOf(
      shape({
        dataIndex: string,
        id: string.isRequired,
        position: number.isRequired,
        title: string,
        render: oneOf([node, func]),
      })
    ),
    func, // Function should return the same shape as above, it just accepts function params
  ]),
  customMethods: objectOf(allKeysAreFunctions),
  data: array.isRequired,
  ...HeaderProps,
};