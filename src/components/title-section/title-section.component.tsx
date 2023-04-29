import { icons } from "../../utils/react-icons";

import { TitleSectionStyle, MarkIcon, Title } from "./title-section.style";

const TitleSection = ({ title, color }: { title: string; color: string }) => {
  return (
    <TitleSectionStyle>
      <MarkIcon color={color}>{icons.marker}</MarkIcon>
      <Title>{title}</Title>
    </TitleSectionStyle>
  );
};

export default TitleSection;
