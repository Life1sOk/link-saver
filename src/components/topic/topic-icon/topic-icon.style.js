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
  top: calc(50% - 2px);

  transform: translateY(-50%);

  width: fit-content;
  height: fit-content;

  font-size: 15px;
  font-weight: 600;
`;
