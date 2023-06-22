import styled from "styled-components";

export const ProcessStyle = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 33;

  display: flex;
  align-items: center;
  gap: 10px;

  width: fit-content;
  padding: 4px 12px;
  border-radius: 3px;

  font-size: var(--font-basic);
  font-weight: var(--font-weight-normal);

  background-color: ${({ theme }) => theme.background.sections};
  border: 1px solid rgb(222, 222, 222);

  -webkit-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const AcceptedProcess = styled(ProcessStyle)`
  border: 1px solid rgba(40, 167, 69, 0.3);
  color: rgba(40, 167, 69, 1);
`;

export const ProcessProcess = styled(ProcessStyle)`
  border: 1px solid rgba(255, 193, 7, 0.3);
  color: rgba(255, 193, 7, 0.8);
`;

export const ErrorProcess = styled(ProcessStyle)`
  border: 1px solid rgba(220, 53, 69, 0.3);
  color: rgba(220, 53, 69, 0.8);
`;

export const IconWrapper = styled.div`
  height: 100%;
  aspect-ratio: 1/ 1;

  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 16px;
    height: 16px;
  }
`;
