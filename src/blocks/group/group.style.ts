import styled from "styled-components";

export const GroupStyle = styled.div<{ isActive: boolean }>`
  position: relative;
  z-index: ${({ isActive }) => (isActive ? "9" : "0")};

  width: 100%;
  height: fit-content;
  min-height: 100px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.color.main};

  padding: 5px;
  border: 1px solid
    ${({ isActive, theme }) => (isActive ? theme.color.active : "white")};
  border-radius: 5px;

  display: flex;
  flex-direction: column;
`;

export const GroupHeader = styled.div`
  width: 100%;
  padding: 7px;
  border-bottom: 1px solid ${({ theme }) => theme.color.secondary};

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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
