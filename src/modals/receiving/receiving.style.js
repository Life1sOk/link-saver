import styled from "styled-components";

export const ReceivingModalStyle = styled.div`
  width: 60%;
  height: 60%;

  padding: 15px;

  background-color: ${({ theme }) => theme.modals.background};
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Title = styled.h2``;

export const GroupsStore = styled.div`
  width: 100%;
  height: 100%;

  padding: 3px;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.background.main};

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: flex-end;
`;
