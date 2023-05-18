import styled from "styled-components";

export const NewCountStyle = styled.div<{
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}>`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  right: ${({ right }) => `${right}px`};
  left: ${({ left }) => `${left}px`};
  bottom: ${({ bottom }) => `${bottom}px`};

  width: 22px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.modals.news};
  color: ${({ theme }) => theme.modals.background};
  flex-shrink: 0;

  font-size: 14px;
`;

export const Count = styled.div`
  position: absolute;
  top: -2px;
  right: 0;

  width: 100%;
  height: 100%;
`;
