import styled from "styled-components";

export const BlankModalStyle = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;

  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background-color: grey;
  color: white;
  opacity: 0.2;
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 19px;
  font-weight: 600;
`;
