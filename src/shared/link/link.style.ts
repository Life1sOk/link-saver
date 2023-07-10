import styled from "styled-components";

export const LinkStyle = styled.a`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  color: inherit;

  display: flex;
  align-items: center;

  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LinkTitle = styled.span`
  font-size: var(--font-mid);
  font-weight: var(--font-weight-main);

  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
