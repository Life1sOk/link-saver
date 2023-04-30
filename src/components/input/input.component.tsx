import { forwardRef } from "react";
import { InputWrapper, InputStyle, InputLabel } from "./input.style";

interface IInput {
  label: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ type, label, required, defaultValue }, ref) => {
    return (
      <InputWrapper>
        <InputLabel htmlFor={label}>{label}</InputLabel>
        <InputStyle
          type={type}
          id={label}
          required={required}
          ref={ref}
          defaultValue={defaultValue}
        />
      </InputWrapper>
    );
  }
);

export default Input;
