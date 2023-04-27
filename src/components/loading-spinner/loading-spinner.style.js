import styled from "styled-components";

export const SpinnerStyle = styled.div`
  width: 50px;
  height: 50px;
  border: 7px solid rgb(0, 112, 201);
  border-top: 10px solid rgb(0, 112, 201);
  border-radius: 50%;

  animation: spinner 1s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
