import styled from "styled-components";

export const TopicMainStyle = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 44px;

  background-color: ${({ isActive }) => (isActive ? "orange" : "white")};
  color: black;
  font-size: larger;
  font-weight: bolder;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
