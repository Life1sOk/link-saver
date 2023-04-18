import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 222px;
  height: fit-content;
  padding: 7px;

  border: 1px solid white;

  &:hover {
    cursor: pointer;
  }
`;

export const FrontDesk = styled.div<{ isGroupActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;

  display: ${({ isGroupActive }) => (isGroupActive ? "initial" : "none")};
  width: 100%;
  height: 100%;

  box-shadow: 0px 0px 15px 6px rgba(255, 255, 255, 0.75) inset;
  -webkit-box-shadow: 0px 0px 15px 6px rgba(255, 255, 255, 0.75) inset;
  -moz-box-shadow: 0px 0px 15px 6px rgba(255, 255, 255, 0.75) inset;
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

export const IconWrapper = styled.div<{ status?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 25px;
    height: 25px;
    padding: 3px;

    color: ${({ status }) => (status ? "rgb(0, 222, 0)" : null)};
  }

  &:hover {
    cursor: pointer;
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
