import styled from "styled-components";

export const TopicStyle = styled.div<{ isActive: boolean }>`
  position: relative;

  width: 100%;
  height: 44px;
  padding: 8px 8px 8px 12px;
  text-align: left;

  border-radius: 4px 0 0 4px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.topic.active : "inherit"};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  &:hover {
    cursor: pointer;

    background-color: ${({ isActive, theme }) =>
      !isActive ? theme.topic.hover : theme.topic.active};
  }
`;

export const Title = styled.p`
  width: 100%;
  max-width: 128px;

  font-size: var(--font-basic);
  font-weight: var(--font-weight-main);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TitleEditor = styled.input`
  width: 100%;
  max-width: 128px;

  font-size: var(--font-basic);
  font-weight: var(--font-weight-main);
  font-family: inherit;

  border: none;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.topic.marker};
`;

export const XMark = styled.div`
  position: relative;

  width: 20px;
  height: 20px;

  &::after {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;

    width: 15px;
    height: 1.5px;
    background-color: ${({ theme }) => theme.topic.marker};
    transform: translateX(-50%) rotate(45deg);

    border-radius: 5px;
  }

  &::before {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;

    width: 15px;
    height: 1.5px;
    background-color: ${({ theme }) => theme.topic.marker};
    transform: translateX(-50%) rotate(-45deg);

    border-radius: 5px;
  }
`;

export const IconMain = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.topic.marker};

  & svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.topic.marker};
  }
`;

export const CountWrapper = styled.div`
  margin: 0 5px 0 auto;
`;
