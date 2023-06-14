import styled from "styled-components";

export const RegistartionWrapper = styled.div`
  padding: 22px 66px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 3px;
`;

export const RegistartionForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const RegTitle = styled.h2`
  margin-bottom: 22px;
`;