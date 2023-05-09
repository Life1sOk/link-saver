import styled from "styled-components";

export const TitleSectionStyle = styled.div`
  width: 100%;
  height: 55px;

  border-bottom: 1px solid ${({ theme }) => theme.border};
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

export const Title = styled.h3`
  font-size: 22px;
`;

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
