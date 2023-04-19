import styled from "styled-components";

export const GenericsWrapper = styled.aside`
  width: 326px;
  height: 100%;
  padding: 20px;

  flex-shrink: 0;
`;

export const GenericsStyle = styled.div`
  width: 100%;
  height: 100%;

  padding: 12px;
  background-color: ${({ theme }) => theme.background.generics};

  box-shadow: 0px 0px 10px 4px rgba(224, 224, 224, 0.75);
  -webkit-box-shadow: 0px 0px 22px 2px rgba(224, 224, 224, 0.75);
  -moz-box-shadow: 0px 0px 10px 4px rgba(224, 224, 224, 0.75);
`;

export const LinksWrapper = styled.div`
  width: 100%;
  height: calc(100% - 27px);
  padding-top: 22px;

  overflow-y: scroll;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  flex-basis: content;
  gap: 15px;
`;
