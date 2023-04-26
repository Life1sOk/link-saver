import styled from "styled-components";

export const GroupsStyle = styled.div`
  width: 100%;
  height: 100%;
  min-width: 333px;

  padding: 20px;

  background-color: ${({ theme }) => theme.background.main};
  border-right: 1px solid ${({ theme }) => theme.border};
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GroupsWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(277px, 317px));
  justify-content: center;
  gap: 18px;
`;
