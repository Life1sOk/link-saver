import styled from "styled-components";

export const UserFriendsStyle = styled.div`
  width: 100%;
  height: 100%;

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
  margin-top: 5px;

  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Status = styled.div`
  width: 25%;
  height: 100%;

  font-size: 13px;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Actions = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background.sections};

  display: flex;
  align-items: center;
  justify-content: center;
`;
