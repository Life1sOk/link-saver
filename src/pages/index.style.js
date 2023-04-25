import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  transition: all 0.2;

  color: ${({ theme }) => theme.color.main};
  background-color: ${({ theme }) => theme.background.main};
`;
