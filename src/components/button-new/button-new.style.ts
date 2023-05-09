import styled from "styled-components";

export const ButtonWrapper = styled.div<{ sectionType: string }>`
  width: fit-content;
  height: 33px;

  display: flex;
  align-items: center;

  border: 2px solid
    ${({ theme, sectionType }) =>
      sectionType === "topic"
        ? theme.topic.marker
        : sectionType === "group"
        ? theme.group.marker
        : theme.link.marker};
  border-left: none;
  border-radius: 3px 5px 5px 3px;

  color: ${({ theme, sectionType }) =>
    sectionType === "topic"
      ? theme.topic.marker
      : sectionType === "group"
      ? theme.group.marker
      : theme.link.marker};
`;

export const ButtonStyle = styled.button`
  padding: 8px 17px 8px 12px;
  background-color: transparent;

  border: none;
  color: inherit;

  font-size: 16px;
  font-weight: 600;
  font-family: "Ysabeau", sans-serif;

  cursor: pointer;

  &:active {
    opacity: 0.9;
  }
`;

export const ColorBold = styled.div<{ sectionType: string }>`
  width: 25px;
  height: 100%;

  background-color: ${({ theme, sectionType }) =>
    sectionType === "topic"
      ? theme.topic.marker
      : sectionType === "group"
      ? theme.group.marker
      : theme.link.marker};

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 25px;
    height: 25px;
    fill: white;
  }
`;
