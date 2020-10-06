import styled from "@emotion/styled";
import { setRem, setShadow } from "./utils";

const itemSpacing = "20px";
const doGridStyling = (useGrid, length) => {
  return (
    useGrid &&
    `display: grid;
    grid-template-columns: repeat(${length}, 1fr);
    `
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

export const StyledColumnLabelsWrapper = styled.div`
  padding: 8px ${itemSpacing};
  box-sizing: border-box;
  text-align: left;
  ${(props) => doGridStyling(true, props.gridLength)}
`;

export const StyledColumnLabel = styled.label`
  font-weight: bold;
  margin-bottom: ${setRem(4)};
  text-align: center;
`;

export const StyledItemsWrapper = styled.div`
  padding: 8px ${itemSpacing};
  box-sizing: border-box;
  ${(props) => doGridStyling(props.useGrid, props.gridLength)}
`;

export const StyledItemWrapper = styled.div`
  padding: 16px 0;
  border-radius: 2px;
  boxsizing: border-box;

  ${setShadow()}
  ${(props) => {
    if (props.useGrid) {
      if (props.gridType === "columnsAsGrid") {
        return `margin: ${itemSpacing} 0;
        ${doGridStyling(true, props.gridLength)}`;
      } else if (props.gridType === "itemsAsGrid") {
        return `margin: ${itemSpacing};`;
      }
    }
  }}
`;

export const StyledCellWrapper = styled.div`
  --itemBg: #eee;
  padding: 16px 16px 24px 16px;
  margin: 4px;
  background-color: var(--itemBg);
`;
