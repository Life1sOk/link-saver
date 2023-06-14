import styled from "styled-components";

export const HoleBlockStyle = styled.div`
  width: 100%;
  max-width: 287px;
  min-width: 122px;
  height: 100%;

  background-color: ${({ theme }) => theme.background.sections};

  margin-left: 10px;
  padding-left: 12px;

  border-left: 1px solid ${({ theme }) => theme.border};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;
