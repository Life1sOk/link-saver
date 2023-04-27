import styled from "styled-components";

export const TopicsStyle = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 55%;

  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const TopicsWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const TopicLine = styled.div`
  width: calc(100%-8px);
  margin-right: 8px;

  border-top: 1px solid ${({ theme }) => theme.lines};
  border-radius: 10%;
`;
