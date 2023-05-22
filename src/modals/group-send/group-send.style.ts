import styled from "styled-components";

export const GroupSendModalStyle = styled.div`
  width: 100%;
  max-width: 666px;
  height: 100%;
  max-height: 411px;

  padding: 5px;
  background-color: white;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GifBlock = styled.div`
  width: 50%;
  height: 100%;
  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;

  display: flex;
  justify-content: flex-end;
  gap: 11px;
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 100%;

  padding: 15px;

  border-right: 1px solid ${({ theme }) => theme.border};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const FriendsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  overflow: scroll;

  background-color: ${({ theme }) => theme.background.main};
  border: 1px solid ${({ theme }) => theme.border};

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Friend = styled.div<{ isPicked: boolean }>`
  width: 100%;
  height: fit-content;
  flex-shrink: 0;

  border-radius: 5px;

  border: 1px solid ${({ isPicked }) => (isPicked ? "red" : "initial")};

  &:hover {
    cursor: pointer;

    border: 1px solid ${({ isPicked }) => (isPicked ? "red" : "lightblue")};
  }
`;
