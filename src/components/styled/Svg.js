import styled from "styled-components";
import { setHoverText } from "./utils";

export const StyledSortArrowSvg = styled.svg`
  padding: 0 8px;
  width: 28px;
  height: 24px;
  display: block;
  cursor: pointer;
  &:hover {
    fill: ${setHoverText};
  }
`;
