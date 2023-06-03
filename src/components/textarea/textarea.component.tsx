import { forwardRef, useId } from "react";
import { TextAreaStyle, TextAreaWrapper, TextareaLabel } from "./textarea.style";

interface ITextArea {
  label?: string;
  required?: boolean;
  defaultValue?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ label, required, defaultValue = "" }, ref) => {
    const id = useId();

    return (
      <TextAreaWrapper>
        <TextareaLabel htmlFor={id}>{label}</TextareaLabel>
        <TextAreaStyle
          rows={4}
          id={id}
          required={required}
          ref={ref}
          defaultValue={defaultValue}
        />
      </TextAreaWrapper>
    );
  }
);

export default TextArea;
