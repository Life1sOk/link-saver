import styled from "styled-components";

export const LinkStyle = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LinkTitle = styled.a`
  width: 100%;
  color: inherit;
  font-size: 19px;

  text-decoration: none;

  &:visited {
    color: rgb(170, 170, 170);
  }
`;
