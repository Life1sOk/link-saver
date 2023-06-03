import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html,body {
    text-align: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.background.main};
    color: ${({ theme }) => theme.color};

    font-family: 'Raleway', sans-serif;
  }

  ol,ul {
    list-style-type: none;
  }

  textarea,
  input {
    font-family: 'Raleway', sans-serif;
  }

  textarea:focus,
  input:focus {
    outline: none;
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
