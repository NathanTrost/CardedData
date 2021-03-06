import styled from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setFont,
  setBorder,
  setTransition,
} from "./utils";

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  min-height: 44px,
  font-size: ${setRem(18)};
  ${setFont.main};
  padding: ${setRem(8)} ${setRem(18)};
  ${setBorder({ color: setColor.primaryColor })};
  ${setLetterSpacing(3)};
  ${setTransition()};
  &:hover {
    background: transparent;
    color: ${setColor.secondaryColor};
  }
  &:active {
    background: ${setColor.lightGrey};
    color: ${setColor.secondaryColor};
  }
  ${(props) =>
    `margin:  ${props.t || 0} ${props.r || 0}   ${props.b || 0}  ${
      props.l || 0
    }} `};
  &:focus {
    outline: none;
  }
  text-decoration: none;
  cursor: pointer;
`;

export const SmallBtn = styled(PrimaryBtn)`
  padding: ${setRem(4)} ${setRem(9)};
`;
