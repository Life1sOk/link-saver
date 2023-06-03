import styled from "styled-components";

export const GroupsStyle = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 66px);
  min-width: 333px;

  padding: 0 15px 5px 15px;

  background-color: ${({ theme }) => theme.background.sections};
  border-right: 1px solid ${({ theme }) => theme.border};
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};

  border-radius: 0 5px 15px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GroupsWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  padding: 17px 12px 12px 12px;

  overflow: scroll;

  display: grid;
  grid-template-columns: repeat(auto-fill, 278px);
  grid-template-rows: repeat(auto-fill, 315px);
  justify-content: center;
  align-content: stretch;
  grid-row-gap: 33px;
  grid-column-gap: 55px;
`;
