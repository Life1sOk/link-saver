import styled from "styled-components";

export const UserFriendsStyle = styled.div`
  width: 100%;
  height: 100%;

  padding: 3px;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.background.main};

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;

  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 5px;
  background-color: blueviolet;
  margin: 5px 0;
`;
