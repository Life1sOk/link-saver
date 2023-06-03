import styled from "styled-components";

export const ReportStyle = styled.form`
  width: 444px;
  height: fit-content;
  background-color: ${({ theme }) => theme.modals.background};
  color: ${({ theme }) => theme.color};
  border-radius: 10px;
  padding: 17px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h3``;

export const ReportBody = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  padding-top: 12px;

  display: flex;
  justify-content: flex-end;
  gap: 17px;
`;
