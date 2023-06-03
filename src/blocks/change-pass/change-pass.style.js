import styled from "styled-components";

export const ChangePassStyle = styled.form`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 34px 1fr 54px;
`;

export const Title = styled.h3`
  font-size: var(--font-huge);
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const ButtonWrapper = styled.div`
  padding: 10px;
  border-top: 1px solid ${({ theme }) => theme.border};

  display: flex;
  justify-content: flex-end;
  gap: 11px;
`;

export const InputWrapper = styled.div`
  padding: 44px;

  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const Line = styled.div`
  border-top: 2px solid ${({ theme }) => theme.border};
`;
