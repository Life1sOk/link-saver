import styled from "styled-components";

export const ReceivingModalStyle = styled.div`
  width: fit-content;
  height: fit-content;
  max-height: 511px;

  padding: 15px;

  background-color: ${({ theme }) => theme.modals.background};
  color: ${({ theme }) => theme.color};
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Title = styled.h3``;

export const GroupsStore = styled.div`
  width: 100%;
  height: 100%;
  min-height: 333px;

  padding: 15px 3px;
  overflow-y: scroll;

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;

  box-shadow: 0px 1px 6px -3px rgba(0, 0, 0, 0.75) inset;
  -webkit-box-shadow: 0px 1px 6px -3px rgba(0, 0, 0, 0.75) inset;
  -moz-box-shadow: 0px 1px 6px -3px rgba(0, 0, 0, 0.75) inset;

  display: grid;
  grid-template-columns: repeat(2, 333px);
  justify-items: center;
  grid-row-gap: 10px;
`;

export const GroupWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 10px;
  border-radius: 14px;
  border-top: 3px solid blue;
  border-bottom: 3px solid blue;
  border-left: 1px solid blue;
  border-right: 1px solid blue;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: flex-end;
`;
