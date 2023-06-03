import styled from "styled-components";

export const ProcessStyle = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 33;

  width: fit-content;
  padding: 3px 10px;
  border-radius: 3px;

  font-size: var(--font-mid);
  font-weight: var(--font-weight-normal);

  background-color: ${({ theme }) => theme.background.sections};
  border: 1px solid rgb(222, 222, 222);

  -webkit-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;
