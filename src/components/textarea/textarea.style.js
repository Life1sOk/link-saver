import styled from "styled-components";

export const TextAreaWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const TextAreaStyle = styled.textarea`
  width: 100%;
  height: 129px;

  font-size: var(--font-basic);
  font-weight: var(--font-weight-normal);
  letter-spacing: 1px;
  color: black;
  padding: 5px;
  resize: none;

  border: none;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.inputs};
  border-radius: 3px;

  &:focus {
    border: 1px solid rgb(0, 112, 201);
  }
`;

export const TextareaLabel = styled.label`
  font-size: 12.5px;
  font-weight: var(--font-weight-main);
  letter-spacing: 0.5px;
  padding-bottom: 5px;
  padding-left: 3px;
`;
