import styled from "styled-components";

export const GenericsStyle = styled.aside`
  width: 45%;
  min-width: 255px;
  height: 100%;

  padding: 12px 8px 8px 8px;
  border-left: 1px solid blanchedalmond;

  background-color: rgba(0, 0, 153, 0.3);
`;

export const LinksWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 22px;

  overflow-y: scroll;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
