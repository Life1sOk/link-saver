import styled from "styled-components";

export const NavigationStyle = styled.nav`
  width: 100%;
  max-width: 244px;
  height: 100%;

  padding: 5px 0px 5px 8px;
  background-color: ${({ theme }) => theme.background.back};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoCheck = styled.h2`
  width: 100%;
  height: 56px;
  font-size: 33px;

  flex-shrink: 0;
`;
