import styled from "styled-components";

export const FriendsModalStyle = styled.div`
  width: 320px;
  height: 466px;

  background-color: ${({ theme }) => theme.modals.background};
  color: ${({ theme }) => theme.color};
  border-radius: 4px;

  padding: 5px;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Buttons = styled.div`
  width: 100%;

  padding: 0 10px 10px 0;

  display: flex;
  justify-content: end;
`;

export const Switcher = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;
