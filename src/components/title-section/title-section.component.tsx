import { icons } from "../../utils/react-icons";

import { TitleSectionStyle, MarkIcon, Title } from "./title-section.style";

interface ITitleSection {
  title: string;
  sectionType: string;
}

const TitleSection = ({ title, sectionType }: ITitleSection) => {
  return (
    <TitleSectionStyle>
      <MarkIcon sectionType={sectionType}>{icons.marker}</MarkIcon>
      <Title>{title}</Title>
    </TitleSectionStyle>
  );
};

export default TitleSection;
