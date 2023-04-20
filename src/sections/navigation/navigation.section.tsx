// Blocks
import TopicsBlock from "../../blocks/topics/topics.block";
import TopicsAddBlock from "../../blocks/topics-add/topics-add.block";
import SettingsBlock from "../../blocks/settings/settings.block";
import { NavigationStyle } from "./navigation.style";

const NavigationSection = () => {

  return (
    <NavigationStyle>
      <TopicsAddBlock />
      <TopicsBlock />
      <SettingsBlock />
    </NavigationStyle>
  );
};

export default NavigationSection;