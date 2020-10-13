import styled from "@emotion/styled";
import { setColor, setBorder } from "./utils";
import { PrimaryBtn } from "./Buttons";

export const StyledDropdownContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const StyledDropdown = styled.div`
  display: block;
`;

export const StyledDropdownBtn = styled(PrimaryBtn)`
  width: 140px;
  height: 44px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledDropdownListContainer = styled.div`
  ${setBorder()}
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  position: absolute;
  display: ${(props) => (props.open ? "block" : "none")};
`;

export const StyledDropdownList = styled.ul`
  list-style: none;
  padding: 0px;
  background-color: #fff;
`;

export const StyledDropdownItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  outline: none;
  cursor: pointer;
  &:hover {
    background: ${setColor.primaryColor};
    color: ${setColor.accentColor};
  }
  &:focus {
    background: ${setColor.primaryColor};
    color: ${setColor.accentColor};
  }
`;

export const StyledDropdownLabel = styled.li`
  display: block;
  text-align: left;
`;
