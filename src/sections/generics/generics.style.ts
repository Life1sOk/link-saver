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

export const LinksWrapper = styled.ul`
  position: relative;

  width: 100%;
  height: 100%;
  padding-top: 15px;

  overflow: scroll;

  display: grid;
  grid-template-columns: repeat(auto-fill, 266px);
  grid-template-rows: repeat(auto-fill, 40px);
  justify-content: center;
  justify-items: center;
  align-items: start;
  gap: 7px;
`;
