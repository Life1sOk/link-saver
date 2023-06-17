import styled from "styled-components";

export const StatusStyle = styled.div`
  position: absolute;
  right: 7px;
  top: 7px;
  z-index: 1;

  width: 66px;
  height: 33px;
  border-radius: 0 2px 2px 0;

  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Count = styled.div<{ type: string; isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  aspect-ratio: 1/1;
  transform: ${({ isActive }) => (isActive ? "translateY(-5px) scale(1.05)" : "none")};
  transition: transform 0.2s ease-out;

  border-radius: 3px;
  border: 1px solid
    ${({ isActive, theme }) => (isActive ? theme.modals.hover : "transparent")};

  font-size: var(--font-mini);
  font-weight: var(--font-weight-basic);

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);

  color: ${({ type, theme }) =>
    type === "total"
      ? theme.link.background
      : type === "done"
      ? theme.link.statusDone
      : "white"};

  &:hover {
    cursor: pointer;
  }
`;
