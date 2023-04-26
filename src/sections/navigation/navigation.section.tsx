import { memo } from "react";

// Blocks
import TopicsBlock from "../../blocks/topics/topics.block";

// Components
import TopicMain from "../../components/topic-main/topic-main.component";

// Style
import { NavigationStyle, LogoCheck } from "./navigation.style";

const NavigationSection = memo(() => {
  return (
    <NavigationStyle>
      <LogoCheck>Logo</LogoCheck>
      <TopicMain />
      <TopicsBlock />
      <p>topic's section (navigation)</p>
    </NavigationStyle>
  );
});

export default NavigationSection;
