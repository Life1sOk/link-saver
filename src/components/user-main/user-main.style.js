import styled from "styled-components";

export const UserMainStyle = styled.div`
  position: relative;

  width: calc(100% - 5px);
  height: fit-content;

  margin: 0 5px 5px 0;

  flex-shrink: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const TriangleUp = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;

  width: 0;
  height: 0;
  flex-shrink: 0;

  transform: translateY(-50%);

  border-left: 3.5px solid transparent;
  border-right: 3.5px solid transparent;
  border-top: 5px solid ${({ theme }) => theme.color};
`;
