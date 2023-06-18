import styled from "styled-components";

export const HoleStyle = styled.div`
  width: 100%;
  max-width: 297px;
  min-width: 122px;
  height: 100%;

  margin-left: 12px;
  border-left: 1px solid ${({ theme }) => theme.border};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const HoleBlockStyle = styled.div`
  font-size: 18px;
  font-weight: var(--font-weight-basic);
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 0 5px 5px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  & > svg {
    width: 27px;
    height: 27px;
  }

  &:hover {
    cursor: pointer;

    box-shadow: 0px 0px 1px 0px ${({ theme }) => theme.modals.hoverSetting};
    -webkit-box-shadow: 0px 0px 1px 0px ${({ theme }) => theme.modals.hoverSetting};
    -moz-box-shadow: 0px 0px 1px 0px ${({ theme }) => theme.modals.hoverSetting};
  }
`;
