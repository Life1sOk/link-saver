import styled from "styled-components";

export const SectionCountStyle = styled.div<{ sectionType: string }>`
  width: 22px;
  aspect-ratio: 1 / 1;
  padding: 2px;

  border-bottom: 1px solid
    ${({ theme, sectionType }) =>
      sectionType === "topic"
        ? theme.topic.marker
        : sectionType === "group"
        ? theme.group.marker
        : theme.link.marker};
  border-top: 1px solid
    ${({ theme, sectionType }) =>
      sectionType === "topic"
        ? theme.topic.marker
        : sectionType === "group"
        ? theme.group.marker
        : theme.link.marker};
  border-radius: 6px;

  font-size: var(--font-mini);
  font-weight: var(--font-weight-main);

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme, sectionType }) =>
    sectionType === "topic"
      ? theme.topic.marker
      : sectionType === "group"
      ? theme.group.marker
      : theme.link.marker};
`;
