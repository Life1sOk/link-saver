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

  border-radius: 0 5px 5px 0;

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

export const GroupsWrapper = styled.div<{ rowsCount?: number; clmCount?: number }>`
  position: relative;

  width: 100%;
  height: 100%;
  padding: 17px 0px 12px 0px;

  overflow-y: scroll;

  display: grid;
  grid-template-columns: repeat(
    ${({ clmCount }) => (clmCount ? clmCount : "auto-fill")},
    278px
  );
  grid-template-rows: ${({ rowsCount }) =>
    rowsCount ? `repeat(${rowsCount}, 47px)` : "repeat(20, 47px)"};
  justify-content: center;
  align-items: start;
  grid-column-gap: 55px;

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
    height: 0px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.group.scrollBar};
    border-radius: 10px;
  }
`;
