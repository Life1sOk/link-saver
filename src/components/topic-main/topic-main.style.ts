import styled from "styled-components";

export const TopicMainStyle = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 55px;
  font-size: 19px;

  padding-left: 12px;

  border-radius: 4px 0 0 4px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.active.topic : "inherit"};

  display: flex;
  align-items: center;
  gap: 7px;

  &:hover {
    cursor: pointer;

    background-color: ${({ isActive, theme }) =>
      !isActive ? theme.hover.topic : theme.active.topic};
  }
`;

export const Title = styled.h4`
  width: 100%;
  text-align: left;

  &:hover {
    cursor: pointer;
  }
`;

export const HomeIcon = styled.div`
  width: 25px;
  height: 25px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;
