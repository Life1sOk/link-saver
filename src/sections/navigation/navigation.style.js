import styled from "styled-components";

export const NavigationStyle = styled.nav`
  width: 100%;
  max-width: 244px;
  height: 100%;

  padding: 5px 0px 5px 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserWrapper = styled.div`
  width: calc(100% - 5px);
  height: fit-content;

  margin: 0 5px 5px 0;

  flex-shrink: 0;

  &:hover {
    cursor: pointer;
  }
`;
