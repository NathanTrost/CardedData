import styled from "styled-components";
import { setColor, setBorder } from "./utils";

export const DropdownContainer = styled.div`
  display: inline-block;
`;

export const DropdownListContainer = styled.div`
  ${setBorder()}
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

export const DropdownList = styled.ul`
  list-style: none;
  padding: 0px;
  background-color: #fff;
`;

export const DropdownItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: ${setColor.primaryColor};
    color: ${setColor.accentColor};
  }
  &:focus {
    background: ${setColor.primaryColor};
    color: ${setColor.accentColor};
  }
  outline: none;
`;
