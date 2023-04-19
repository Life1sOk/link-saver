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
  grid-template-columns: repeat(auto-fill, minmax(299px, 313px));
  justify-content: center;
  gap: 18px;
`;
