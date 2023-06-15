import styled from "styled-components";

export const ButtonWrapper = styled.div<{ sectionType: string }>`
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

  &:hover {
    cursor: pointer;

    color: white;
    background-color: ${({ theme, sectionType }) =>
      sectionType === "topic"
        ? theme.topic.marker
        : sectionType === "group"
        ? theme.group.marker
        : theme.link.marker};
  }
`;

export const ButtonStyle = styled.button`
  width: 100%;
  padding: 3px 13px 3px 7px;
  background-color: transparent;

  border: none;
  color: inherit;
  cursor: pointer;

  font-size: 13.5px;
  font-weight: var(--font-weight-main);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    opacity: 0.9;
  }
`;

export const ColorBold = styled.div<{ sectionType: string }>`
  width: 25px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, sectionType }) =>
    sectionType === "topic"
      ? theme.topic.marker
      : sectionType === "group"
      ? theme.group.marker
      : theme.link.marker};

  border-right: 1px solid;

  & svg {
    width: 25px;
    height: 25px;
    fill: white;
  }
`;
