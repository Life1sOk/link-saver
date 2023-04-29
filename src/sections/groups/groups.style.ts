import styled from "styled-components";

export const GroupsStyle = styled.div`
  width: 100%;
  height: 100%;
  min-width: 333px;

  padding: 0 15px 5px 15px;
  overflow: scroll;

  background-color: ${({ theme }) => theme.background.main};
  border-right: 1px solid ${({ theme }) => theme.border};
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};

  border-radius: 0 5px 5px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GroupsWrapper = styled.div`
  width: 100%;
  margin-top: 17px;
  padding: 0 12px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  justify-content: center;
  justify-items: center;
  gap: 14px;
`;
