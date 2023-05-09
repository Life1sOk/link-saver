import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;

  background-color: rgba(255, 255, 255);
  border: 1px solid ${({ theme }) => theme.border};

  &:active {
    opacity: 0.9;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
