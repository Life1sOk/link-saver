import styled from "styled-components";

export const LinkStyle = styled.div`
  width: 100%;

  font-size: 18px;
  font-weight: 500;
  text-align: left;

  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LinkTitle = styled.a`
  width: 100%;
  max-width: 165px;
  color: inherit;

  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
