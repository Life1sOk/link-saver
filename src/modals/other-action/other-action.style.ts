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
  padding: 5px 0;

  border-radius: 5px;
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;
