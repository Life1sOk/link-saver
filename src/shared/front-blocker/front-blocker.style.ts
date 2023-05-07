import styled from "styled-components";

export const FrontBlockerStyle = styled.div<{ isBlocked: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;

  display: ${({ isBlocked }) => (isBlocked ? "initial" : "none")};
  width: 100%;
  height: 100%;

  border: 1px solid white;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
`;
