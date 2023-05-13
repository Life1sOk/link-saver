import styled from "styled-components";

export const SettingsBlockStyle = styled.div`
  background-color: ${({ theme }) => theme.background.sections};

  padding-left: 12px;

  border-left: 1px solid ${({ theme }) => theme.border};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
