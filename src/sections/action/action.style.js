import styled from "styled-components";

export const ActionStyle = styled.div`
  width: 100%;
  height: 51px;
  padding: 0 10px;

  flex-shrink: 0;

  background-color: ${({ theme }) => theme.background.sections};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LocalActions = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 15px;
`;

export const AddBlockStyle = styled.div`
  padding: 10px 10px 10px 5px;
  border-right: 1px solid ${({ theme }) => theme.border};

  display: flex;
  gap: 10px;
`;
