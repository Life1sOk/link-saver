import styled from "styled-components";

export const SearchBlockStyle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FindedUsers = styled.div`
  width: 100%;
  min-height: 336px;
  padding: 3px;

  overflow-y: scroll;
  background-color: ${({ theme }) => theme.background.main};

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;

  display: flex;
  flex-direction: column;
`;

export const DefaultAndSpin = styled(FindedUsers)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
