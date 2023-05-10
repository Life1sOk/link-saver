import styled from "styled-components";

export const DialogBack = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ isOpen }) => (isOpen ? "12" : "2")};

  width: 100vw;
  height: 100vh;
`;

export const OpenWindow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 15;

  width: 128px;
  height: fit-content;
  background-color: ${({ theme }) => theme.modals.background};

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.modals.border};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
`;
