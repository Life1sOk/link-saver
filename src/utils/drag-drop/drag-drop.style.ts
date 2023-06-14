import styled from "styled-components";

export const DropStyle = styled.div<{ isShow: boolean }>`
  width: 100%;
  height: 100%;

  /* box-shadow: inset 0 0 10px rgba(0, 128, 255, 0.2),
    inset 0 0 10px rgba(255, 255, 255, 0.4); */
  /* border-radius: 25px; */
  /* overflow: hidden; */

  box-shadow: ${({ isShow }) =>
    isShow
      ? `inset 0 0 10px rgba(0, 128, 255, 0.6),
    inset 0 0 10px rgba(255, 255, 255, 0.6)`
      : "initial"};

  animation: ${({ isShow }) => (isShow ? `pulse 1.5s ease-in-out infinite` : "none")};

  @keyframes pulse {
    0% {
      box-shadow: inset 0 0 10px rgba(0, 128, 255, 0.6),
        inset 0 0 10px rgba(255, 255, 255, 0.6);
    }
    50% {
      box-shadow: inset 0 0 30px rgba(0, 128, 255, 0.6),
        inset 0 0 10px rgba(255, 255, 255, 0.6);
    }
    100% {
      box-shadow: inset 0 0 10px rgba(0, 128, 255, 0.6),
        inset 0 0 10px rgba(255, 255, 255, 0.6);
    }
  }
`;

export const DragStyle = styled.div`
  width: 100%;
  height: 100%;

  /* border-radius: 25px; */
  /* overflow: hidden; */
`;
