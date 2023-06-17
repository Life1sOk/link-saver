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

export const Title = styled.h3`
  margin-bottom: 12px;
`;

export const ArchiveMain = styled.div<{ count?: number }>`
  width: 100%;
  height: 100%;
  padding: 8px 5px;

  overflow-y: scroll;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(${({ count }) => (count ? `${count}` : "auto-fill")}, 46px);
  align-items: center;
  justify-items: center;
  grid-gap: 11px;

  box-shadow: 0px -5px 54px -31px rgba(222, 222, 222, 0.75) inset;
  -webkit-box-shadow: 0px -5px 54px -31px rgba(222, 222, 222, 0.75) inset;
  -moz-box-shadow: 0px -5px 54px -31px rgba(222, 222, 222, 0.75) inset;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey; */
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
  margin-bottom: 10px;

  font-size: var(--font-big);
  font-weight: var(--font-weight-normal);

  border-radius: 5px;
  border-left: 4px solid ${({ theme }) => theme.modals.news};

  -webkit-box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.modals.activeShadow};
  -moz-box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.modals.activeShadow};
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.modals.activeShadow};
`;

export const ArchiveBottom = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: flex-end;
`;
