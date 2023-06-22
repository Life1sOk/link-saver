import styled from "styled-components";

export const FriendsStyle = styled.div`
  width: 100%;
  height: 100%;

  padding: 5px;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.background.main};

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const UsersWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px 13px;
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 5px;
  background-color: blueviolet;
  margin: 5px 0;
`;

export const SearchBlockStyle = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DefaultAndSpin = styled(FriendsStyle)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
