import styled from "styled-components";

export const ButtonWrapper = styled.div<{ sectionType: string }>`
  width: 100%;
  height: 33px;

  display: flex;
  align-items: center;

  border: 1px solid
    ${({ theme, sectionType }) =>
      sectionType === "topic"
        ? theme.topic.marker
        : sectionType === "group"
        ? theme.group.marker
        : theme.link.marker};
  border-radius: 3px 5px 5px 3px;

  color: ${({ theme, sectionType }) =>
    sectionType === "topic"
      ? theme.topic.marker
      : sectionType === "group"
      ? theme.group.marker
      : theme.link.marker};
`;

export const ButtonStyle = styled.button`
  width: 100%;
  padding: 8px 17px 8px 12px;
  background-color: transparent;

  border: none;
  color: inherit;
  cursor: pointer;

  font-size: 16px;
  font-weight: 600;
  font-family: "Ysabeau", sans-serif;

  &:active {
    opacity: 0.9;
  }
`;

export const ColorBold = styled.div<{ sectionType: string }>`
  width: 25px;
  height: 100%;

  color: ${({ theme, sectionType }) =>
    sectionType === "topic"
      ? theme.topic.marker
      : sectionType === "group"
      ? theme.group.marker
      : theme.link.marker};

  display: flex;
  align-items: center;
  justify-content: center;

  border-right: 1px solid
    ${({ theme, sectionType }) =>
      sectionType === "topic"
        ? theme.topic.marker
        : sectionType === "group"
        ? theme.group.marker
        : theme.link.marker};

  & svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme, sectionType }) =>
      sectionType === "topic"
        ? theme.topic.marker
        : sectionType === "group"
        ? theme.group.marker
        : theme.link.marker};
  }
`;
