import styled from "styled-components";

export const GroupStyle = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100px;

  padding: 5px;
  border: 1px solid red;
  background-color: coral;

  display: flex;
  flex-direction: column;
`;

export const GroupHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  & svg {
    width: 22px;
  }
`;

export const Title = styled.h3`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;
