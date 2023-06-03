import { BlankStyle, BlankIcon } from "./blank-section.style";

interface IBlankModal {
  title: string;
  icon?: any;
}

const Blank = ({ title, icon }: IBlankModal) => {
  return (
    <BlankStyle>
      <BlankIcon>{icon}</BlankIcon>
      <span>{title}</span>
    </BlankStyle>
  );
};

export default Blank;
