import { ButtonStyle } from "./button.style";

interface IButton {
  name: string;
  type?: string;
  form?: string;
  actionHandle?: () => void;
}

const Button = ({ name, actionHandle, type, form }: IButton) => {
  return (
    <ButtonStyle form={form} onClick={actionHandle} type={type}>
      {name}
    </ButtonStyle>
  );
};

export default Button;
