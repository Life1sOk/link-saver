import { icons } from "../../utils/react-icons";

import { TitleSectionStyle, MarkIcon, Title } from "./title-section.style";

const TitleSection = ({ title, sectionType }: { title: string; sectionType: string }) => {
  return (
    <TitleSectionStyle>
      <MarkIcon sectionType={sectionType}>{icons.marker}</MarkIcon>
      <Title>{title}</Title>
    </TitleSectionStyle>
  );
};

export default TitleSection;
