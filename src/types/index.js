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

const filterProps = {
  columns: arrayOf(
    shape({
      id: string.isRequired,
      title: string.isRequired,
    })
  ),
  onFilter: func,
};

export const HeaderProps = filterProps;

export const DropdownFilterProps = filterProps;

export const HeaderLabelProps = {
  children: oneOfType([string, node]).isRequired,
  onFilter: func,
};

export const CardedDataProps = {
  columnOverwrite: bool,
  customHeader: node,
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
  layout: shape({
    displayColumnLabels: bool,
    displayFilterDropdown: bool,
    gridType: oneOf(["itemsAsGrid", "columnsAsGrid"]),
    gridLength: number,
    useGrid: bool,
  }),
  ...filterProps,
};
