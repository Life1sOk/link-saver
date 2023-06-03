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

  font-size: var(--font-mini);
  font-weight: var(--font-weight-main);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Count = styled.div`
  width: 100%;
  height: 75%;

  /* margin-bottom: 1px; */
`;
