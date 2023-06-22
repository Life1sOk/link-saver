import styled from "styled-components";

export const SettingActionStyle = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 3px;
  padding: 5px;

  &:hover {
    cursor: pointer;

    box-shadow: 0px 0px 1px 0px ${({ theme }) => theme.modals.hoverSetting};
    -webkit-box-shadow: 0px 0px 1px 0px ${({ theme }) => theme.modals.hoverSetting};
    -moz-box-shadow: 0px 0px 1px 0px ${({ theme }) => theme.modals.hoverSetting};
  }
`;

export const ActionTitle = styled.a`
  margin: 0 5px;

  font-size: 13.5px;
  font-weight: var(--font-weight-main);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const triangle = styled.div`
  width: 0;
  height: 0;
  flex-shrink: 0;

  margin: 4px 0 0 4px;

  border-left: 3.5px solid transparent;
  border-right: 3.5px solid transparent;
`;

export const TriangleDown = styled(triangle)`
  border-top: 5px solid ${({ theme }) => theme.color};
`;

export const TriangleUp = styled(triangle)`
  border-bottom: 5px solid ${({ theme }) => theme.color};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 22px;
    height: 22px;
  }
`;
