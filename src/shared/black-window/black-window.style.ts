import styled from "styled-components";

export const BlackWindowStyle = styled.dialog<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  z-index: 2;

  width: 100%;
  height: 100%;

  border: none;
  background-color: rgba(0, 0, 0, 0.3);

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const AnimationWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  animation-name: modalAnimation;
  animation-duration: 0.5s;
`;
