import styled from "styled-components";

export const TopicStyle = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 44px;
  padding: 8px;
  text-align: left;
  font-size: 20px;

  border-radius: 4px 0 0 4px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.active.topic : "inherit"};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;

  &:hover {
    cursor: pointer;

    background-color: ${({ isActive, theme }) =>
      !isActive ? theme.hover.topic : theme.active.topic};
  }
`;

export const Title = styled.p`
  width: 100%;
  max-width: 128px;

  font-size: 17px;
  font-weight: 500;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TitleEditor = styled.input`
  width: 100%;
  max-width: 128px;

  font-size: 17px;
  font-weight: 500;
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

  color: #f7b84f;
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
    background-color: #f7b84f;
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
    background-color: #f7b84f;
    transform: translateX(-50%) rotate(-45deg);

    border-radius: 5px;
  }
`;
