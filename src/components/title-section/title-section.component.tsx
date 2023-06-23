import { memo } from "react";

import Mark from "../../shared/mark/mark.shared";
import SectionCount from "../../shared/section-count/section-count.shared";

import { TitleSectionStyle, Title, CountWrapper } from "./title-section.style";

interface ITitleSection {
  title: string;
  count: number;
  sectionType: "topic" | "group" | "generic";
}

const TitleSection = memo(({ title, count, sectionType }: ITitleSection) => {
  return (
    <TitleSectionStyle>
      <Mark sectionType={sectionType} />
      <Title>{title}</Title>
      <CountWrapper>
        <SectionCount sectionType={sectionType} count={count} />
      </CountWrapper>
    </TitleSectionStyle>
  );
});

export default TitleSection;
