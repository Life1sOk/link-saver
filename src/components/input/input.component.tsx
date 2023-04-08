import { forwardRef } from "react";
import { InputWrapper, InputStyle } from "./input.style";

interface IInput {
  label: string;
  type: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ type, label, required }, ref) => {
    return (
      <InputWrapper>
        <label htmlFor={label}>{label}</label>
        <InputStyle type={type} id={label} required={required} ref={ref} />
      </InputWrapper>
    );
  }
);

export default Input;
