import { icons } from "../../utils/react-icons";

import { ButtonWrapper, ButtonStyle, ColorBold } from "./button-new.style";

interface IButton {
  name?: string;
  type?: "submit" | "reset" | "button" | undefined;
  form?: string;
  actionHandle?: () => void;
  sectionType: string;
}

const ButtonNew = ({ name, actionHandle, type, form, sectionType }: IButton) => {
  return (
    <ButtonWrapper sectionType={sectionType} onClick={actionHandle}>
      <ColorBold sectionType={sectionType}>{icons.marker}</ColorBold>
      <ButtonStyle form={form} type={type}>
        {name}
      </ButtonStyle>
    </ButtonWrapper>
  );
};

export default ButtonNew;
