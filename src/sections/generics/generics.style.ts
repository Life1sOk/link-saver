import styled from "styled-components";

export const GenericsWrapper = styled.aside<{ isTransfer: boolean }>`
  position: relative;
  z-index: ${({ isTransfer }) => (isTransfer ? "9" : "0")};

  width: 100%;
  height: 100%;
  min-width: 277px;

  background-color: ${({ theme }) => theme.background.main};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  padding: 0 5px 5px 5px;

  display: flex;
  flex-direction: column;

  overflow: scroll;
`;

export const LinksWrapper = styled.div`
  width: 100%;
  margin-top: 17px;

  display: grid;
  grid-template-columns: repeat(auto-fill, 266px);
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 9px;
`;
