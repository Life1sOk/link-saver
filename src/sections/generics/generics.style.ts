import styled from "styled-components";

export const GenericsWrapper = styled.aside<{ isTransfer: boolean }>`
  position: relative;
  z-index: ${({ isTransfer }) => (isTransfer ? "9" : "0")};

  width: 100%;
  height: 100%;
  max-height: calc(100vh - 66px);
  min-width: 277px;

  background-color: ${({ theme }) => theme.background.sections};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  padding: 0 5px 5px 5px;

  display: flex;
  flex-direction: column;
`;

export const LinksWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 90%;
  padding: 8px;

  display: grid;
  grid-template-columns: repeat(auto-fill, 266px);
  grid-template-rows: repeat(auto-fill, 40px);
  justify-content: center;
  justify-items: center;
  align-items: start;
  grid-gap: 7px;
`;

export const LinksScrollBar = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  margin-bottom: 28px;

  -webkit-box-shadow: 0px -1px 3px -1px ${({ theme }) => theme.link.scrollBar} inset;
  -moz-box-shadow: 0px -1px 3px -1px ${({ theme }) => theme.link.scrollBar} inset;
  box-shadow: 0px -1px 3px -1px ${({ theme }) => theme.link.scrollBar} inset;

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.link.scrollBar};
    border-radius: 10px;
  }
`;
