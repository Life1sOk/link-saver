import { memo } from "react";

// Blocks
import TopicsBlock from "../../blocks/topics/topics.block";
import SettingsBlock from "../../blocks/settings/settings.block";

// Components
import TopicMain from "../../components/topic-main/topic-main.component";
import UserMain from "../../components/user-main/user-main.component";

// Style
import { NavigationStyle } from "./navigation.style";

const NavigationSection = memo(() => {
  return (
    <NavigationStyle>
      <UserMain />
      <TopicMain />
      <TopicsBlock />
      <SettingsBlock />
    </NavigationStyle>
  );
});

export default NavigationSection;
