import styled from "styled-components";

export const ArchiveItemStyle = styled.div`
  width: 100%;
  height: fit-content;

  padding: 3px;
  border-radius: 4px;

  -webkit-box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.modals.activeShadow};
  -moz-box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.modals.activeShadow};
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.modals.activeShadow};

  display: flex;
  align-items: center;
  gap: 3px;
`;

export const Actions = styled.div`
  width: 33px;
  height: 33px;

  flex-shrink: 0;

  border-radius: 50%;
  color: ${({ theme }) => theme.modals.activeShadow};

  & > svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.modals.active};
  }
`;
