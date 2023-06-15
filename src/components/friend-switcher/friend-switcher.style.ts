import styled from "styled-components";

export const FriendSwitcherStyle = styled.div<{ isActive: boolean }>`
  position: relative;

  width: 99px;
  height: 41px;

  font-size: var(--font-mini);
  font-weight: var(--font-weight-main);

  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: 0px 0px 3px 0px
    ${({ isActive, theme }) => (isActive ? theme.modals.active : "initial")};
  -moz-box-shadow: 0px 0px 3px 0px
    ${({ isActive, theme }) => (isActive ? theme.modals.active : "initial")};
  box-shadow: 0px 0px 3px 0px
    ${({ isActive, theme }) => (isActive ? theme.modals.active : "initial")};

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 3px 0px
      ${({ isActive, theme }) => (!isActive ? theme.modals.activeShadow : "initial")};
    -moz-box-shadow: 0px 0px 3px 0px
      ${({ isActive, theme }) => (!isActive ? theme.modals.activeShadow : "initial")};
    box-shadow: 0px 0px 3px 0px
      ${({ isActive, theme }) => (!isActive ? theme.modals.activeShadow : "initial")};
  }
`;
