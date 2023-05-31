import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background.main};
    color: ${({ theme }) => theme.color};
  }

  ol,ul {
    list-style-type: none;
  }

  @keyframes modalAnimation {
    from {
      transform: translateY(-20%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  min-width: 975px;
`;
