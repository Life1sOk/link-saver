import styled from "styled-components";

export const MarkIcon = styled.div<{ sectionType: string }>`
  width: 30px;
  height: 30px;
  color: ${({ theme, sectionType }) =>
    sectionType === "topic"
      ? theme.topic.marker
      : sectionType === "group"
      ? theme.group.marker
      : theme.link.marker};

  & svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme, sectionType }) =>
      sectionType === "topic"
        ? theme.topic.marker
        : sectionType === "group"
        ? theme.group.marker
        : theme.link.marker};
  }
`;
