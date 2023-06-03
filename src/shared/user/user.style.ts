import styled from "styled-components";

export const UserStyle = styled.div`
  display: flex;
  gap: 15px;

  width: 100%;
  height: 51px;

  padding: 2px 0 2px 10px;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background.sections};
  overflow: hidden;
`;

export const Icon = styled.img`
  height: 100%;
  aspect-ratio: 1/ 1;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.border};

  background-color: #1877f2;
`;

export const UsersData = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 2px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3px;
`;

export const SpanBase = styled.span`
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SpanName = styled(SpanBase)`
  font-size: var(--font-big);
  font-weight: var(--font-weight-main);
`;

export const SpanEmail = styled(SpanBase)`
  font-size: var(--font-small);
  font-weight: var(--font-weight-basic);
`;
