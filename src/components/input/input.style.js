import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const InputStyle = styled.input`
  width: 100%;
  height: 29px;

  font-size: var(--font-basic);
  font-weight: var(--font-weight-normal);
  letter-spacing: 1px;
  color: black;
  padding-left: 5px;

  border: none;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: rgba(255, 255, 255);
  border-radius: 3px;

  &:focus {
    border: 1px solid rgb(0, 112, 201);
  }
`;

export const InputLabel = styled.label`
  font-size: 12.5px;
  font-weight: var(--font-weight-main);
  letter-spacing: 0.5px;
  padding-bottom: 5px;
  padding-left: 3px;
`;
