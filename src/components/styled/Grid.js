import styled from "styled-components";
import { setShadow } from "./utils";

const borderPadding = "20px";
const doGridStyling = (useGrid, length) => {
  return (
    useGrid &&
    `display: grid;
    grid-template-columns: repeat(${length}, 1fr);`
  );
};

export const StyledAppWrapper = styled.div`
  padding: 10px;
  box-sizing: border-box;
  display: block;
`;

export const StyledHeaderWrapper = styled.div`
  padding: 10px;
`;

export const StyledColumnLabels = styled.div`
  padding: 8px ${borderPadding};
  box-sizing: border-box;
  text-align: left;
  ${(props) => doGridStyling(true, props.gridLength)}
`;

export const StyledItemsWrapper = styled.div`
  padding: 8px ${borderPadding};
  box-sizing: border-box;
  overflow: auto;
  ${(props) => doGridStyling(props.useGrid, props.gridLength)}
`;

export const StyledItemWrapper = styled.div`
  padding: 16px 0;
  border-radius: 2px;
  boxsizing: border-box;
  overflow: auto;
  ${setShadow()}
  ${(props) => {
    if (props.useGrid) {
      if (props.gridType === "columnsAsGrid") {
        return doGridStyling(true, props.gridLength);
      } else if (props.gridType === "itemsAsGrid") {
        return `margin: ${borderPadding};`;
      }
    }
  }}
`;
