import styled from "styled-components";

export const NavigationStyle = styled.nav`
  width: 100%;
  max-width: 244px;
  height: 100%;

  padding: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  &.whitetheme {
    background-color: white;
  }
  &.darktheme {
    background-color: black;
  }
`;
