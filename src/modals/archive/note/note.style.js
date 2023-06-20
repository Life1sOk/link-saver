import styled from "styled-components";

export const NoteStyle = styled.div`
  width: 100%;
  padding: 7px 12px 12px 12px;
  margin: 5px 0 10px 0;

  font-size: var(--font-big);
  font-weight: var(--font-weight-normal);

  border-radius: 5px;
  border-left: 4px solid ${({ theme }) => theme.modals.news};

  -webkit-box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.modals.activeShadow};
  -moz-box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.modals.activeShadow};
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.modals.activeShadow};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 25px;
    height: 25px;
    margin: 0 6px;
  }
`;

export const NoteLine = styled.span`
  padding: 2px;

  display: flex;
  align-items: end;

  & > strong {
    margin: 0 0 0 5px;
  }
`;

export const NoteIcon = styled.span`
  padding: 0 3px;

  display: flex;
  align-items: center;

  & > svg {
    width: 23px;
    height: 23px;
  }
`;
