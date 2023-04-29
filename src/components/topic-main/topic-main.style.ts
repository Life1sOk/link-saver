import styled from "styled-components";

export const TopicMainStyle = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 55px;

  flex-shrink: 0;

  padding-left: 12px;

  border-radius: 4px 0 0 4px;
  border-top: 1px solid ${({ theme }) => theme.border};

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

export const Title = styled.h3`
  width: 100%;
  text-align: left;
  font-size: 19px;

  &:hover {
    cursor: pointer;
  }
`;

export const MarkIcon = styled.div`
  width: 30px;
  height: 30px;
  color: #f7b84f;

  & svg {
    width: 100%;
    height: 100%;
    fill: #f7b84f;
  }
`;
