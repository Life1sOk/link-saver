import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background.main};
    color: ${({ theme }) => theme.color};
  }
`;

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  transition: all 0.2;
`;
