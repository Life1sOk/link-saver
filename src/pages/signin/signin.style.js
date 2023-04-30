import styled from "styled-components";

export const SigninStyle = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-attachment: fixed;
  background-image: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  background-size: 600%;
  background-position: 0 0;
  background-repeat: no-repeat;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-name: gradients;

  @keyframes gradients {
    0% {
      background-position: 0 0;
    }

    25% {
      background-position: 50% 0;
    }

    50% {
      background-position: 90% 0;
    }

    60% {
      background-position: 60%;
    }

    75% {
      background-position: 40%;
    }

    100% {
      background-position: 0 0;
    }
  }
`;
