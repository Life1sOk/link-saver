import styled from "styled-components";

export const InfoBlockStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  width: 100%;
  height: 100%;
  max-height: 222px;
  background-color: ${({ theme }) => theme.background.sections};

  border-radius: 5px 0 0 5px;
  border: 1px solid ${({ theme }) => theme.border};
`;