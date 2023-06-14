import styled from "styled-components";

export const GroupTitleStyle = styled.div`
  width: 100%;

  text-align: left;
`;

export const TitleInput = styled.input`
  width: 100%;

  font-size: var(--font-large);
  font-weight: var(--font-weight-main);
  font-family: inherit;
  color: inherit;

  border: none;
  background-color: transparent;
`;

export const Title = styled.h3`
  width: 100%;
  max-width: 159px;

  font-size: var(--font-large);
  font-weight: var(--font-weight-main);

  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
