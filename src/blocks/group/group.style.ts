import styled from "styled-components";

export const GroupStyle = styled.div<{ isActive: boolean }>`
  position: relative;
  z-index: ${({ isActive }) => (isActive ? "9" : "0")};

  width: 100%;
  height: fit-content;
  min-height: 100px;

  padding: 5px;
  border: 1px solid ${({ isActive }) => (isActive ? "rgb(0,222,0)" : "white")};
  border-radius: 5px;
  background-color: rgba(153, 51, 255, 0.7);

  display: flex;
  flex-direction: column;
`;

export const GroupHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  & svg {
    width: 22px;
  }

  &:hover {
    cursor: pointer;
    color: red;
  }
`;

export const LinksPlace = styled.div`
  width: 100%;
  margin: 11px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
