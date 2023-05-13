import { memo } from "react";

// Blocks
import TopicsBlock from "../../blocks/topics/topics.block";
import TopicsAddBlock from "../../blocks/topics-add/topics-add.block";
import InfoBlock from "../../blocks/info/info.block";
import UserBlock from "../../blocks/user/user.block";

// Components
import TopicMain from "../../components/topic-main/topic-main.component";

// Style
import { NavigationStyle } from "./navigation.style";

const NavigationSection = memo(() => {
  return (
    <>
      <TopicsAddBlock />
      <NavigationStyle>
        <UserBlock />
        <TopicMain />
        <TopicsBlock />
        <InfoBlock />
      </NavigationStyle>
    </>
  );
});

export default NavigationSection;
