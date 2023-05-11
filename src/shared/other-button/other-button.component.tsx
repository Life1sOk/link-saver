import { OtherButtonStyle } from "./other-button.style";

interface IOtherButton {
  title: string;
  action?: () => void;
}

const OtherButton = ({ title, action }: IOtherButton) => {
  return <OtherButtonStyle onClick={action}>{title}</OtherButtonStyle>;
};

export default OtherButton;
