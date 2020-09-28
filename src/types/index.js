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
  columns: oneOfType([
    arrayOf(
      shape({
        id: string.isRequired,
        title: string.isRequired,
      })
    ),
    func, // Function should return the same shape as above, it just accepts function params
  ]),

  onFilter: func,
};

export const DropdownFilterProps = filterProps;

export const DropdownFilterOptionProps = {
  focus: bool.isRequired,
  index: number.isRequired,
  onSelect: func.isRequired,
  setFocus: func.isRequired,
  item: shape({
    title: string.isRequired,
  }).isRequired,
};

export const ColumnLabelsProps = filterProps;

export const ColumnLabelProps = {
  children: oneOfType([string, node]).isRequired,
  onFilter: func.isRequired,
};

export const CardedDataProps = {
  columnOverwrite: bool,
  customHeader: oneOfType([node, func]),
  customColumns: oneOfType([
    arrayOf(
      shape({
        dataKey: string,
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
