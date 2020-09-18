import styled from "styled-components";

const doGridStyling = (useGrid, length) => {
  return (
    useGrid &&
    `display: grid;
    grid-template-columns: repeat(${length}, 1fr);`
  );
};

export const StyledItemWrapper = styled.div`
  margin: 16px 0;
  padding: 32px 0;
  border-radius: 2px;
  boxsizing: border-box;
  overflow: auto;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  ${(props) => doGridStyling(props.useGrid, props.gridLength)}}
`;

export const StyledItemsWrapper = styled.div`
  margin: 10px 0;
  padding: 10px 0;
  box-sizing: border-box;
  overflow: auto;
  ${(props) => doGridStyling(props.useGrid, props.gridLength)}
`;

export const StyledColumnLabels = styled.div`
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  text-align: left;
  ${(props) => doGridStyling(true, props.gridLength)}
`;

export const StyledAppWrapper = styled.div`
  padding: 30px;
  box-sizing: border-box;
`;
