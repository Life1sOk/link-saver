import styled from "styled-components";

export const HoleStyle = styled.div`
  width: 100%;
  max-width: 297px;
  min-width: 122px;
  height: 100%;

  margin-left: 12px;
  border-left: 1px solid ${({ theme }) => theme.border};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const HoleBlockStyle = styled.div`
  & > svg {
    width: 48px;
    height: 48px;

    color: rgba(255, 58, 0, 0.6);
  }
`;
