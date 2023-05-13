import styled from "styled-components";

export const ActionStyle = styled.div`
  width: 100%;
  height: 51px;
  padding-left: 22px;
  padding-right: 10px;

  flex-shrink: 0;

  background-color: ${({ theme }) => theme.background.sections};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LocalActions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
