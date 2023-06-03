import styled from "styled-components";

export const AreYouSureStyle = styled.div`
  padding: 22px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.background.sections};
  color: ${({ theme }) => theme.color};
`;

export const Message = styled.article`
  font-size: var(--font-huge);
  font-weight: var(--font-weight-normal);
  padding: 10px;
`;

export const ButtonsWrapper = styled.div`
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
`;
