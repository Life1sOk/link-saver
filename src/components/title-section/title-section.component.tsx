import { TitleSectionStyle, Title } from "./title-section.style";

const TitleSection = ({ title }: { title: string }) => {
  return (
    <TitleSectionStyle>
      <Title>{title}</Title>
    </TitleSectionStyle>
  );
};

export default TitleSection;
