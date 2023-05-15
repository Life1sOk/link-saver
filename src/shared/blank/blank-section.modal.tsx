import { BlankModalStyle } from "./blank-section.style";

interface IBlankModal {
  title: string;
}

const BlankModal = ({ title }: IBlankModal) => {
  return <BlankModalStyle>Empty {title}</BlankModalStyle>;
};

export default BlankModal;
