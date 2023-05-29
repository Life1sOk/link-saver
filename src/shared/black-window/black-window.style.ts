import styled from "styled-components";

export const BlackWindowStyle = styled.dialog<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  z-index: 2;

  width: 100%;
  height: 100%;

  border: none;
  background-color: rgba(0, 0, 0, 0.4);

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;
