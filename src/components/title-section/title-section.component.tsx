import Mark from "../../shared/mark/mark.shared";

import { TitleSectionStyle, Title } from "./title-section.style";

interface ITitleSection {
  title: string;
  sectionType: "topic" | "group" | "generic";
}

const TitleSection = ({ title, sectionType }: ITitleSection) => {
  return (
    <TitleSectionStyle>
      <Mark sectionType={sectionType} />
      <Title>{title}</Title>
    </TitleSectionStyle>
  );
};

export default TitleSection;
