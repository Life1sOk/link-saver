import styled from "styled-components";

export const GroupsStyle = styled.main`
  width: 100%;
  height: 100%;

  border: 1px solid rebeccapurple;
  padding: 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GroupsWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(199px, 1fr));
  gap: 18px;
`;
