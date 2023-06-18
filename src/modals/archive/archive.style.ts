import styled from "styled-components";

export const ArchiveModalStyle = styled.div`
  width: 766px;
  height: 566px;

  padding: 15px;

  background-color: ${({ theme }) => theme.modals.background};
  color: ${({ theme }) => theme.color};
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArchiveHeader = styled.div`
  width: 100%;
  padding: 0 10px 10px 15px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const Title = styled.h3`
  font-size: 22px;
`;

export const ArchiveIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  & > svg {
    width: 25px;
    height: 25px;
  }
`;

export const InputWrapper = styled.div`
  width: 313px;

  display: flex;
  align-items: center;

  & input {
    height: 33px;
    border-left: 1px solid transparent;
    border-radius: 0;
  }
`;

export const IconWrapper = styled.div`
  width: 33px;
  height: 33px;
  border: 1px solid ${({ theme }) => theme.border};
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 23px;
    height: 23px;
  }
`;

export const ArchiveMain = styled.div<{ count?: number }>`
  width: 100%;
  height: 100%;
  padding: 8px;
  border-radius: 4px;

  overflow-y: scroll;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(${({ count }) => (count ? `${count}` : "auto-fill")}, 46px);
  align-items: center;
  justify-items: center;
  grid-gap: 11px;

  box-shadow: 0px 1px 6px -3px rgba(0, 0, 0, 0.75) inset;
  -webkit-box-shadow: 0px 1px 6px -3px rgba(0, 0, 0, 0.75) inset;
  -moz-box-shadow: 0px 1px 6px -3px rgba(0, 0, 0, 0.75) inset;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.modals.news};
    border-radius: 10px;
  }
`;

export const Message = styled.div`
  width: 100%;
  padding: 12px;
  margin: 5px 0 10px 0;

  font-size: var(--font-big);
  font-weight: var(--font-weight-normal);

  border-radius: 5px;
  border-left: 4px solid ${({ theme }) => theme.modals.news};

  -webkit-box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.modals.activeShadow};
  -moz-box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.modals.activeShadow};
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.modals.activeShadow};

  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 25px;
    height: 25px;
    margin: 0 6px;
  }
`;

export const ArchiveBottom = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: flex-end;
`;
