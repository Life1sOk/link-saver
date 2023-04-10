import styled from "styled-components";

export const TopicStyle = styled.div<{ isActive: boolean }>`
  width: 100%;
  padding: 12px;
  text-align: left;
  font-size: 20px;

  color: ${({ isActive }) => (isActive ? "orange" : "white")};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  &:hover {
    cursor: pointer;

    color: orange;

    & svg {
      color: orange;
    }
  }
`;
