import styled from "styled-components";

export const FriendsModalStyle = styled.div`
  width: 640px;
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

export const SwitcherWrapper = styled.div`
  width: 100%;
  padding: 5px;

  display: flex;
  justify-content: flex-start;
  gap: 13px;
`;
