import styled from "styled-components";

export const SettingsBlockStyle = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 233px;
  background-color: ${({ theme }) => theme.background.navigation};

  padding-top: 7px;
  padding-right: 8px;
  padding: 7px 8px 8px 12px;

  border-radius: 4px 0 0 4px;
  border-right: 1px solid rgb(222, 222, 222);
  border-bottom: 1px solid rgb(222, 222, 222);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;
