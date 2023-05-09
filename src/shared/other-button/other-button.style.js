import styled from "styled-components";

export const OtherButtonStyle = styled.button`
  width: 100%;
  height: 32px;
  padding: 0 24px;

  background-color: ${({ theme }) => theme.modals.button};

  border: none;

  text-align: center;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.modals.active};
  }
`;
