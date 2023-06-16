import styled from "styled-components";

export const DragMarkerStyle = styled.div`
  position: absolute;
  top: -7px;
  right: -7px;

  display: flex;
`;

export const OneLine = styled.div`
  width: 12px;
  height: 12px;
  background-color: rgba(135, 206, 250, 1);
  border-radius: 50%;
`;

export const TwoLine = styled.div`
  width: 20px;
  height: 2px;
  background-color: rgba(135, 206, 250, 1);
  transform: translate(10px, 10px) rotate(45deg);
`;
