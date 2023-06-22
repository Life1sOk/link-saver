import styled from "styled-components";

export const ArchiveItemStyle = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 333px;

  display: flex;
  gap: 5px;
`;

export const Actions = styled.div`
  width: 33px;
  height: 33px;

  flex-shrink: 0;

  border-radius: 50%;
  color: ${({ theme }) => theme.modals.activeShadow};
  margin-top: 3px;

  padding: 3px;
  border-radius: 4px;

  -webkit-box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.modals.activeShadow};
  -moz-box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.modals.activeShadow};
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.modals.activeShadow};

  & > svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.modals.active};
  }
`;
