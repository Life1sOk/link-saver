import styled from "styled-components";

export const GroupAddStyle = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 50%;
  height: 50%;

  padding: 33px;
  background-color: coral;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`;

export const GroupButtons = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 11px;
`;
