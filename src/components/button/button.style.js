import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: green;
  cursor: pointer;

  &:active {
    opacity: 0.9;
  }
`;
