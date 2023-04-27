import styled from "styled-components";

export const MainLayout = styled.div`
  width: 100%;
  height: 100%;

  user-select: none;

  display: flex;
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 5px 5px 5px 0;

  display: flex;
  flex-direction: column;
  gap: 5px;

  .main-container {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 8px 277px;
    align-items: center;
    gap: 2px;
  }
`;

export const BorderResize = styled.div`
  width: 8px;
  height: 99%;

  flex-shrink: 0;

  border-radius: 10px;
  background-color: #1877f2;
  opacity: 0.5;

  transition: opacity 0.3s;

  &:hover {
    cursor: col-resize;
    opacity: 1;
  }
`;
