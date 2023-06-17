import styled from "styled-components";

export const DragMarkerStyle = styled.div`
  position: absolute;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  gap: 1.5px;
`;

export const OneLine = styled.div`
  width: 10px;
  height: 1px;
  background-color: white;
  border-radius: 50%;
`;

export const TwoLine = styled.div`
  width: 10px;
  height: 1px;
  background-color: white;
`;
