import styled from "styled-components";

export const IconWrapper = styled.div<{ isActive: boolean }>`
  margin-right: 10px;
  flex-shrink: 0;

  transition: color 0.2s;
  color: ${({ isActive, theme }) => (isActive ? theme.group.active : "white")};

  & svg {
    width: 23px;
    height: 23px;
    color: inherit;
  }

  &:hover {
    cursor: pointer;
  }
`;
