import styled from "styled-components";

export const InviteModalStyle = styled.div`
  width: 320px;
  height: fit-content;
  max-height: 510px;

  background-color: ${({ theme }) => theme.modals.background};
  border-radius: 4px;

  padding: 5px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h3``;

export const FindedUsers = styled.div`
  width: 100%;
  height: 336px;
  padding-left: 5px;

  overflow-y: scroll;
  background-color: ${({ theme }) => theme.background.main};

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;

  display: flex;
  flex-direction: column;
`;

export const UserWrapper = styled.div`
  width: 75%;
  height: fit-content;
`;

export const WrapperWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
`;

export const DefaultAndSpin = styled(FindedUsers)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Buttons = styled.div`
  width: 100%;

  padding: 0 10px 10px 0;

  display: flex;
  justify-content: end;
`;
