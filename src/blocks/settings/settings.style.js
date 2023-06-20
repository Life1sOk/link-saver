import styled from "styled-components";

export const SettingsBlockStyle = styled.div`
  width: 100%;
  height: 100%;
  max-height: 210px;
  padding: 0 10%;
  background-color: ${({ theme }) => theme.background.sections};

  border-radius: 5px 0 0 5px;
  border: 1px solid ${({ theme }) => theme.border};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;

  & > div {
    width: 100%;

    justify-content: flex-start;
    gap: 12px;
  }
`;
