import styled from "styled-components";

export const GroupStyle = styled.div<{ isActive?: boolean; gridRow?: string }>`
  position: relative;
  z-index: ${({ isActive }) => (isActive ? "9" : "0")};

  width: 100%;
  height: fit-content;

  background-color: ${({ theme }) => theme.group.background};
  border-radius: 5px;

  -webkit-box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.group.shadow};
  -moz-box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.group.shadow};
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.group.shadow};

  display: flex;
  flex-direction: column;

  grid-row: ${({ gridRow }) => (gridRow ? gridRow : null)};
`;

export const GroupHeader = styled.div`
  position: relative;

  width: 100%;
  min-height: 44px;
  border-radius: 5px 5px 0 0;
  color: white;

  background: rgb(255, 78, 58);
  background: linear-gradient(
    171deg,
    rgba(255, 78, 58, 1) 0%,
    rgba(255, 116, 99, 1) 49%,
    rgba(255, 141, 141, 1) 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GroupHeaderTop = styled.div`
  padding: 12px 9px 9px 9px;

  display: flex;
  align-items: center;
`;

export const LinksPlace = styled.div`
  width: 100%;
  min-height: 107px;
  height: fit-content;
  padding: 10px;

  display: grid;
  grid-template-columns: repeat(auto-fill, 255px);
  grid-template-rows: repeat(auto-fill, 40px);
  justify-content: center;
  justify-items: center;
  align-items: start;
  gap: 7px;
`;

export const ActionsLine = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0 3px 3px 3px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  width: 100%;
  padding: 7px 0;

  font-size: var(--font-large);
  font-weight: var(--font-weight-main);

  text-align: left;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CenterBlack = styled.div`
  position: relative;

  width: 100%;
  height: 107px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
