import { forwardRef, ChangeEvent, useId } from "react";
import { InputWrapper, InputStyle, InputLabel } from "./input.style";

interface IInput {
  label: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
  change?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ type, label, required, defaultValue, placeholder, change }, ref) => {
    const id = useId();

    return (
      <InputWrapper>
        {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
        <InputStyle
          type={type}
          id={id}
          required={required}
          ref={ref}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={change}
        />
      </InputWrapper>
    );
  }
);

export default Input;
