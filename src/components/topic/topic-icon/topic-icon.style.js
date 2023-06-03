import styled from "styled-components";

export const Icon = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  padding: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.topic.marker};

  & svg {
    width: 33px;
    height: 33px;
  }
`;

export const Count = styled.span`
  position: absolute;
  top: 50%;

  transform: translateY(-50%);

  width: fit-content;
  height: fit-content;

  font-size: var(--font-mini);
  font-weight: var(--font-weight-main);
`;
