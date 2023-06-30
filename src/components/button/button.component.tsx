import { ButtonStyle } from "./button.style";

interface IButton {
  name?: string;
  type?: "submit" | "reset" | "button" | undefined;
  form?: string;
  actionHandle?: () => void;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = ({ name, actionHandle, type, form, disabled }: IButton) => {
  return (
    <ButtonStyle form={form} onClick={actionHandle} type={type} disabled={disabled}>
      {name}
    </ButtonStyle>
  );
};

export default Button;
