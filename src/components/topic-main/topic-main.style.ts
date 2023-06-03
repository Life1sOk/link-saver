import styled from "styled-components";

export const TopicMainStyle = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 55px;

  flex-shrink: 0;

  padding-left: 12px;

  border-radius: 4px 0 0 4px;
  border-top: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.topic.active : "inherit"};

  display: flex;
  align-items: center;
  gap: 7px;

  &:hover {
    cursor: pointer;

    background-color: ${({ isActive, theme }) =>
      !isActive ? theme.topic.hover : theme.topic.active};
  }
`;

export const Title = styled.h3`
  width: 100%;
  text-align: left;

  font-size: var(--font-large);
  font-weight: var(--font-weight-main);

  &:hover {
    cursor: pointer;
  }
`;

export const MarkIcon = styled.div`
  position: relative;

  width: 43px;
  height: 43px;
  color: ${({ theme }) => theme.topic.marker};

  & svg {
    transform: rotate(90deg);
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.topic.marker};
  }
`;

export const Count = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  color: white;
  font-size: var(--font-mini);
  font-weight: var(--font-weight-main);
`;
