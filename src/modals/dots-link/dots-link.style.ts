import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: relative;

  width: 100%;
  height: fit-content;

  &:hover {
    cursor: pointer;
  }
`;

export const FrontDesk = styled.div<{ isGroupActive: boolean }>`
  display: ${({ isGroupActive }) => (isGroupActive ? "initial" : "none")};

  content: "";
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  opacity: 0.2;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
`;

export const DotsLinkStyle = styled.div<{ isGroupActive: boolean }>`
  position: relative;
  z-index: ${({ isGroupActive }) => (isGroupActive ? "10" : "0")};

  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconWrapper = styled.div`
  & svg {
    width: 25px;
    height: 25px;
  }
`;

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
  height: 80px;
  padding: 8px 0;
  background-color: grey;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ActionP = styled.button`
  width: 100%;
  height: 32px;
  padding: 0 24px;
  text-align: center;

  &:hover {
    cursor: pointer;
    color: orange;
  }
`;
