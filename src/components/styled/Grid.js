import styled from "styled-components";
import { setRem, setShadow } from "./utils";

const itemSpacing = "16px";
const itemBg = `--itemBg: #eee; 
background-color: var(--itemBg);`;

const cellSpacing = `
padding: 4px 4px 12px 4px;
margin: ${setRem(4)};
`;

const containerWrapper = `  
padding: 4px ${itemSpacing};
box-sizing: border-box;
`;

const itemWrapper = `
padding: 8px 0;
boxsizing: border-box;
`;

const doGridStyling = (useGrid, length) => {
  return (
    useGrid &&
    `display: grid;
    grid-template-columns: repeat(${length}, 1fr);
    `
  );
};

export const StyledAppWrapper = styled.div`
  padding: 8px;
  box-sizing: border-box;
  display: block;
`;

export const StyledHeaderWrapper = styled.div`
  padding: 8px 0px;
`;

export const StyledColumnLabelsWrapper = styled.div`
  ${containerWrapper}
  text-align: left;
  ${(props) => doGridStyling(true, props.gridLength)}
`;

export const StyledColumnLabelWrapper = styled.div`
  ${itemWrapper}
`;

export const StyledColumnLabelCell = styled.div`
  ${cellSpacing}
  font-weight: bold;
  text-align: center;
  display: inline-flex;
  ${itemBg}
`;

export const StyledItemsWrapper = styled.div`
  ${containerWrapper}
  ${(props) => doGridStyling(props.useGrid, props.gridLength)}
`;

export const StyledItemWrapper = styled.div`
  ${itemWrapper}
  border-radius: 2px;

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

export const StyledItemCell = styled.div`
  ${cellSpacing}
  ${itemBg}
`;
