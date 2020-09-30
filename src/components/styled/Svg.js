import styled from "styled-components";
import { setHoverText } from "./utils";

export const StyledSortArrowSvg = styled.svg`
  padding: 0 8px;
  width: 20px;
  height: 16px;
  display: block;
  cursor: pointer;
  &:hover {
    fill: ${setHoverText};
  }
`;
