import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  cursor: pointer;

  &:active {
    opacity: 0.9;
  }
  &.textbutton{
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
}
`;
