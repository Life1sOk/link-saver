import styled from "styled-components";

export const GroupActiveStyle = styled.div<{ isActive: boolean }>`
  margin-right: 5px;
  width: 25px;
  height: 25px;

  & svg {
    /* color: ${({ isActive }) => (isActive ? "rgb(0,222,0)" : "white")}; */
    color: #0f2350;

    width: 100%;
    height: 100%;
  }

  &:hover {
    cursor: pointer;

    & svg {
      color: rgb(0, 222, 0);
    }
  }
`;
