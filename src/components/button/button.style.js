import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.inputs};
  border: 1px solid ${({ theme }) => theme.border};

  &:enabled:active {
    opacity: 0.9;
  }

  &:enabled:hover {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.modals.active};
    color: ${({ theme }) => theme.modals.active};
  }
`;
