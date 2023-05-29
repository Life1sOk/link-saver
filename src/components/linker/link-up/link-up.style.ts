import styled from "styled-components";

export const DialogBack = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ isOpen }) => (isOpen ? "12" : "2")};

  width: 100vw;
  height: 100vh;
`;

// position: fixed;
// top: 0;
// z-index: 2;

// width: 100%;
// height: 100%;

// border: none;
// background-color: rgba(0, 0, 0, 0.4);

// display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
// align-items: center;
// justify-content: center;
