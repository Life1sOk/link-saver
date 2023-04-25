import styled from "styled-components";

export const GenericsWrapper = styled.aside`
  width: 277px;
  height: 100%;

  flex-shrink: 0;

  background-color: ${({ theme }) => theme.background.main};
  border: 1px solid ${({ theme }) => theme.border};
`;

export const GenericsStyle = styled.div`
  width: 100%;
  height: 100%;

  padding: 12px;
`;

export const LinksWrapper = styled.div`
  width: 100%;
  height: calc(100% - 27px);

  overflow-y: scroll;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  flex-basis: content;
  gap: 7px;
`;
