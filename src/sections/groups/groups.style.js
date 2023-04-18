import styled from "styled-components";

export const GroupsStyle = styled.main`
  width: 100%;
  height: 100%;
  padding: 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GroupsWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 18px;
`;
