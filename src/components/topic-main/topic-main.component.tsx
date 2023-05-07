import { useAppSelector } from "../../App/store/hooks";
import { useTopicLocal } from "../../utils/hooks/useTopicLocal";

import { icons } from "../../utils/react-icons";

import { TopicMainStyle, Title, MarkIcon } from "./topic-main.style";

const TopicMain = () => {
  const activeTopic = useAppSelector((state) => state.topicsLocal.window.activeTopic);

  const { resetTopicWindow } = useTopicLocal();

  const defaultMain = () => {
    if (activeTopic.topic_title !== "Main") resetTopicWindow();
  };

  return (
    <TopicMainStyle onClick={defaultMain} isActive={activeTopic.topic_title === "Main"}>
      <MarkIcon>{icons.marker}</MarkIcon>
      <Title>Main desk</Title>
    </TopicMainStyle>
  );
};

export default TopicMain;
