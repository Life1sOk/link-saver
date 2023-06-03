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
  font-size: var(--font-huge);
  font-weight: var(--font-weight-main);
`;
