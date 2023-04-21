import { forwardRef } from "react";
import { TextAreaStyle, TextAreaWrapper } from "./textarea.style";

interface ITextArea {
    label?: string;
    required?: boolean;
    defaultValue?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
    ({ label, required, defaultValue = "" }, ref) => {
        return (
            <TextAreaWrapper>
                <label htmlFor={label}>{label}</label>
                <TextAreaStyle
                    rows={4}
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