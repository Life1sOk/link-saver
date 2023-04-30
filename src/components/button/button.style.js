import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;

  background-color: lightgray;

  color: white;

  &:active {
    opacity: 0.9;
  }

  &:hover {
    cursor: pointer;
    background-color: #c2c2c2;
  }
`;
