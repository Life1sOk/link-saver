import styled from "styled-components";

export const TopicMainStyle = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 55px;

  flex-shrink: 0;

  padding: 0 8px 0 12px;

  border-radius: 4px 0 0 4px;
  border-top: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.topic.active : "inherit"};

  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    cursor: pointer;

    background-color: ${({ isActive, theme }) =>
      !isActive ? theme.topic.hover : theme.topic.active};
  }
`;

export const Title = styled.h3`
  width: 100%;
  max-width: 128px;
  text-align: left;

  font-size: var(--font-large);
  font-weight: var(--font-weight-main);

  &:hover {
    cursor: pointer;
  }
`;

export const CountWrapper = styled.div`
  margin: 0 5px 0 auto;
`;
