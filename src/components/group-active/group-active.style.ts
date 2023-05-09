import styled from "styled-components";

export const GroupActiveStyle = styled.div<{ isActive: boolean }>`
  width: 23px;
  height: 23px;
  margin-right: 10px;
  flex-shrink: 0;

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  background-color: ${({ isActive, theme }) => (isActive ? theme.group.active : "white")};

  transition: background-color 0.3s;

  &:hover {
    cursor: pointer;
  }
`;
