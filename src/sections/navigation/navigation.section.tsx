// Blocks
import TopicsBlock from "../../blocks/topics/topics.block";
import TopicsAddBlock from "../../blocks/topics-add/topics-add.block";

// Style
import { NavigationStyle } from "./navigation.style";

const NavigationSection = () => {
  return (
    <NavigationStyle>
      <TopicsAddBlock />
      <TopicsBlock />
      <p>topic's section (navigation)</p>
    </NavigationStyle>
  );
};

export default NavigationSection;
