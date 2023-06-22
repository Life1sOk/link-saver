import { SectionCountStyle } from "./section-count.style";

interface ISectionCount {
  count: number;
  sectionType: "topic" | "group" | "generic";
}

const SectionCount = ({ count, sectionType }: ISectionCount) => {
  return <SectionCountStyle sectionType={sectionType}>{count}</SectionCountStyle>;
};

export default SectionCount;
