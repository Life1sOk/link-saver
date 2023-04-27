import styled from "styled-components";

export const ActionStyle = styled.div`
  width: 100%;
  height: 51px;
  padding-left: 22px;

  flex-shrink: 0;

  background-color: ${({ theme }) => theme.background.main};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;

  display: flex;
  align-items: center;
  gap: 7px;
`;
