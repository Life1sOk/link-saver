import styled from "styled-components";

export const UserStyle = styled.div`
  display: flex;
  gap: 15px;

  width: calc(100% - 5px);
  height: 51px;
  margin: 0 5px 5px 0;

  padding: 2px 0 2px 10px;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background.sections};
  overflow: hidden;

  flex-shrink: 0;
`;

export const Icon = styled.img`
  height: 100%;
  aspect-ratio: 1/ 1;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.border};

  background-color: #1877f2;
`;

export const UsersData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding-right: 2px;
`;

export const SpanBase = styled.span`
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SpanName = styled(SpanBase)`
  font-size: 17px;

  font-weight: 600;
`;

export const SpanEmail = styled(SpanBase)`
  font-size: 14px;

  font-weight: 500;
`;
