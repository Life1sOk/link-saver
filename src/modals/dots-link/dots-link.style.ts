import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 266px;
  height: fit-content;
  padding: 8px;

  color: white;
  background-color: #0070c9;
  border-radius: 5px;

  box-shadow: 0px 0px 3px 0px rgba(0, 112, 201, 0.75);
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 112, 201, 0.75);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0, 112, 201, 0.75);

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

  border: 1px solid white;
  border-radius: 5px;
  border: 1px solid rgba(247, 184, 79, 0.75);

  box-shadow: 0px 0px 3px 2px rgba(247, 184, 79, 0.75);
  -webkit-box-shadow: 0px 0px 3px 2px rgba(247, 184, 79, 0.75);
  -moz-box-shadow: 0px 0px 3px 2px rgba(247, 184, 79, 0.75);
`;

export const DotsLinkStyle = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconWrapper = styled.div<{ status?: number }>`
  padding: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 20px;
    height: 20px;

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
