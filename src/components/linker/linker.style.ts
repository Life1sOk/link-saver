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
