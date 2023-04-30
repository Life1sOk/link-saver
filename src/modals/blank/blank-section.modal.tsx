import { BlankModalStyle } from "./blank-section.style";

interface IBlankModal {
  title: string;
  color: string;
}

const BlankModal = ({ title, color }: IBlankModal) => {
  return <BlankModalStyle color={color}>{title}</BlankModalStyle>;
};

export default BlankModal;
