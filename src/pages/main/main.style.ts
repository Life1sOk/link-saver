import styled from "styled-components";

export const MainLayout = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;

  display: flex;

  /* background-attachment: fixed;
  background-image: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  background-size: 600%;
  background-position: 0 0;
  background-repeat: no-repeat;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-name: gradients; */
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
