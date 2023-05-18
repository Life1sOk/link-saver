import styled from "styled-components";

export const FriendSwitcherStyle = styled.div<{ isActive: boolean }>`
  position: relative;

  width: 99px;
  height: 41px;

  font-size: 14px;
  font-weight: 600;

  border-radius: 5px;
  border-top: 2px solid
    ${({ isActive, theme }) => (isActive ? theme.modals.active : "initial")};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    border-top: 2px solid
      ${({ isActive, theme }) => (!isActive ? theme.modals.hover : "initial")};
  }
`;
