import styled from "styled-components";

export const GroupStyle = styled.div<{ isActive: boolean }>`
  position: relative;
  z-index: ${({ isActive }) => (isActive ? "9" : "0")};

  width: 289px;
  height: fit-content;

  background-color: ${({ theme }) => theme.group.background};
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.group.border};
  border-radius: 5px;

  display: flex;
  flex-direction: column;
`;

export const GroupHeader = styled.div`
  position: relative;

  width: 100%;
  padding: 7px;
  border-bottom: 1px solid ${({ theme }) => theme.group.border};

  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.group.icon};

  & svg {
    width: 22px;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.group.active};
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
