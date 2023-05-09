import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 266px;
  height: fit-content;
  padding: 8px;

  color: ${({ theme }) => theme.link.color};
  background-color: ${({ theme }) => theme.link.background};
  border-radius: 5px;

  box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.link.shadow};
  -webkit-box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.link.shadow};
  -moz-box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.link.shadow};

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
  border: 1px solid ${({ theme }) => theme.link.border};

  box-shadow: 0px 0px 3px 2px ${({ theme }) => theme.link.shadowActive};
  -webkit-box-shadow: 0px 0px 3px 2px ${({ theme }) => theme.link.shadowActive};
  -moz-box-shadow: 0px 0px 3px 2px ${({ theme }) => theme.link.shadowActive};
`;

export const DotsLinkStyle = styled.div`
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

    color: ${({ status, theme }) => (status ? theme.link.statusDone : null)};
  }

  &:hover {
    cursor: pointer;
  }
`;
