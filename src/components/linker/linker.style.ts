import styled from "styled-components";

export const ModalWrapper = styled.div<{ status: boolean }>`
  position: relative;

  width: 100%;
  height: 40px;
  padding: 6px;

  color: ${({ theme }) => theme.link.color};
  border-radius: 5px;

  box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.link.shadow};
  -webkit-box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.link.shadow};
  -moz-box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.link.shadow};

  background: ${({ status }) =>
    status
      ? `linear-gradient(
        171deg,
        rgba(0, 204, 102, 1) 0%,
        rgba(0, 145, 61, 1) 49%,
        rgba(18, 102, 66, 1) 100%
      )`
      : `linear-gradient(
        171deg,
        rgba(47, 164, 255, 1) 0%,
        rgba(0, 112, 201, 1) 49%,
        rgba(24, 90, 143, 1) 100%
      )`};

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

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.link.border};

  /* background: rgb(111, 111, 111); */
  background: linear-gradient(
    171deg,
    rgba(111, 111, 111, 0.5) 0%,
    rgba(255, 255, 255, 0.5) 49%,
    rgba(154, 154, 154, 0.5) 100%
  );
`;

export const DotsLinkStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  border-radius: 5px;
  overflow: hidden;
`;

export const IconWrapper = styled.div<{ status?: boolean }>`
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

export const UpAction = styled.span`
  width: 100%;
  height: fit-content;
  padding: 7px;

  color: ${({ theme }) => theme.color};

  font-size: var(--font-mini);
  font-weight: var(--font-weight-basic);

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.link.marker};
  }
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
  border: 1px solid ${({ theme }) => theme.border};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
`;

export const LinkWrapper = styled.div`
  width: 171px;
`;
