import styled from "styled-components";

export const ProfileStyle = styled.div`
  width: 555px;
  height: 411px;

  padding: 10px;
  background-color: ${({ theme }) => theme.modals.background};
  color: ${({ theme }) => theme.color};
  border-radius: 4px;

  display: flex;
`;

export const LeftSide = styled.div`
  width: 211px;
  height: 100%;

  border-right: 1px solid ${({ theme }) => theme.border};
  padding-right: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;
`;

export const UserWrapper = styled.div`
  width: 200px;
  margin-bottom: 10px;
`;

export const ActionSection = styled.div<{ isActive: boolean }>`
  width: 100%;
  border-radius: 3px;
  padding: 10px;

  font-size: var(--font-mini);
  font-weight: var(--font-weight-main);

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
