import styled from "styled-components";

export const SettingActionStyle = styled.a`
  width: 100%;
  height: 44px;
  border-radius: 4px 0px 0px 4px;
  background-color: white;

  display: flex;
  align-items: center;
  gap: 13px;
  flex-shrink: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const ActionTitle = styled.span`
  font-size: 17px;
  font-weight: 600;
`;

export const IconWrapper = styled.div`
  padding-left: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 23px;
    height: 23px;
  }
`;
