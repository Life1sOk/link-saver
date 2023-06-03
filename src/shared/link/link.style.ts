import styled from "styled-components";

export const LinkStyle = styled.div`
  width: 100%;

  font-size: var(--font-mid);
  font-weight: var(--font-weight-main);
  text-align: left;

  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LinkTitle = styled.a`
  width: 100%;
  color: inherit;

  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
