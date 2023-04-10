import styled from "styled-components";

export const ButtonLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin: 10px;
`;

export const BlackWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: black;
  opacity: 0.4;

  display: flex;
  align-items: center;
  justify-content: center;
`;
