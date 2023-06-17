import styled from "styled-components";

const blue = "rgba(0, 128, 255, 0.6)";
const red = "rgba(255, 58, 0, .6)";

export const DropStyle = styled.div<{ isShow: boolean; typeAction?: string }>`
  width: 100%;
  height: 100%;

  box-shadow: ${({ isShow, typeAction }) =>
    isShow
      ? `inset 0 0 10px ${typeAction === "delete" ? red : blue},
    inset 0 0 10px ${typeAction === "delete" ? red : blue}`
      : "initial"};

  animation: ${({ isShow, typeAction }) =>
    isShow
      ? `${typeAction === "delete" ? "pulseRed" : "pulseBlue"} 1.5s ease-in-out infinite`
      : "none"};

  @keyframes pulseBlue {
    0% {
      box-shadow: inset 0 0 10px ${blue}, inset 0 0 10px rgba(255, 255, 255, 0.6);
    }
    50% {
      box-shadow: inset 0 0 30px ${blue}, inset 0 0 10px rgba(255, 255, 255, 0.6);
    }
    100% {
      box-shadow: inset 0 0 10px ${blue}, inset 0 0 10px rgba(255, 255, 255, 0.6);
    }
  }

  @keyframes pulseRed {
    0% {
      box-shadow: inset 0 0 10px ${red}, inset 0 0 10px rgba(255, 255, 255, 0.6);
    }
    50% {
      box-shadow: inset 0 0 30px ${red}, inset 0 0 10px rgba(255, 255, 255, 0.6);
    }
    100% {
      box-shadow: inset 0 0 10px ${red}, inset 0 0 10px rgba(255, 255, 255, 0.6);
    }
  }
`;

export const DragStyle = styled.div`
  width: 100%;
  height: fit-content;
`;
