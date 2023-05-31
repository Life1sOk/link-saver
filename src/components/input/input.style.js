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

  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  color: black;
  padding-left: 5px;

  border: none;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 3px;

  &:focus {
    border: 1px solid rgb(0, 112, 201);
  }
`;

export const InputLabel = styled.label`
  font-size: 14.5px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding-bottom: 5px;
  padding-left: 3px;
`;
