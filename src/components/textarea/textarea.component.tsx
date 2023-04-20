import { forwardRef } from "react";
import { TextAreaStyle, TextAreaWrapper } from "./textarea.style";

interface ITextArea {
  label: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ type, label, required, defaultValue }, ref) => {
    return (
      <TextAreaWrapper>
        <label htmlFor={label}>{label}</label>
        <TextAreaStyle
          type={type}
          id={label}
          required={required}
          ref={ref}
          defaultValue={defaultValue}
        />
      </TextAreaWrapper>
    );
  }
);

export default TextArea;