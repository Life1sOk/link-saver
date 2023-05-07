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
  background-color: white;
  padding: 5px 0;

  border-radius: 5px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

export const ActionP = styled.button`
  width: 100%;
  height: 32px;
  padding: 0 24px;

  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};

  text-align: center;
  border: none;

  &:hover {
    cursor: pointer;
    color: orange;
  }
`;
