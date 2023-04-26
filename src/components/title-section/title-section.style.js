import styled from "styled-components";

export const TitleSectionStyle = styled.div`
  width: 100%;
  height: 55px;

  border-bottom: 1px solid ${({ theme }) => theme.border};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: 24px;
`;
