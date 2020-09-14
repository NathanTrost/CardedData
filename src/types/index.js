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
import { allItemsAreFunctions } from "./customDefinitions";

export const HeaderProps = {
  columnOverwrite: bool,
  displayColumnHeader: bool,
  displayFilterDropdown: bool,
  onFilter: func,
};

export const DropdownFilterProps = {
  columns: arrayOf(
    shape({
      id: string.isRequired,
      title: string.isRequired,
    })
  ),
  onFilter: func,
};

export const HeaderLabelProps = {
  children: oneOfType([string, node]).isRequired,
  onFilter: func,
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
  customMethods: objectOf(allItemsAreFunctions),
  data: array.isRequired,
  ...HeaderProps,
};
