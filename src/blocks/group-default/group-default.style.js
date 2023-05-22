import styled from "styled-components";

export const GroupDisplay = styled.div`
  width: 289px;
  height: fit-content;

  background-color: ${({ theme }) => theme.group.background};
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.group.border};
  border-radius: 5px;

  display: flex;
  flex-direction: column;
`;

export const LinksPlace = styled.div`
  width: 100%;
  margin: 11px 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h3`
  width: 100%;

  font-size: 22px;
  font-weight: 600;

  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 266px;
  padding: 8px;

  color: ${({ theme }) => theme.link.color};
  background-color: ${({ theme }) => theme.link.background};
  border-radius: 5px;

  box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.link.shadow};
  -webkit-box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.link.shadow};
  -moz-box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.link.shadow};

  &:hover {
    cursor: pointer;
  }
`;

export const GroupHeader = styled.div`
  width: 100%;
  padding: 7px;
  border-bottom: 1px solid ${({ theme }) => theme.group.border};
`;
