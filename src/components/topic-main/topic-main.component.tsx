import { useEffect } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useTopicLocal } from "../../utils/helper-dispatch/useTopicLocal";
import { useTopicLogic } from "../../utils/contollers/useTopicLogic";

import { icons } from "../../utils/react-icons";

import { TopicMainStyle, Title, MarkIcon, Count } from "./topic-main.style";

const TopicMain = () => {
  const userId = useAppSelector((state) => state.user.profile.id);
  const activeTopic = useAppSelector((state) => state.topicsLocal.window.activeTopic);
  const currentCount = useAppSelector((state) => state.topicsLocal.count[`Main`]);

  const { resetTopicWindow } = useTopicLocal();
  const { getGroupCount } = useTopicLogic();

  const defaultMain = () => {
    if (activeTopic.topic_title !== "Main") resetTopicWindow();
  };

  useEffect(() => {
    if (userId > 0) getGroupCount({ id: 0, topic_title: "Main" }, userId);
  }, [userId]);

  return (
    <TopicMainStyle onClick={defaultMain} isActive={activeTopic.topic_title === "Main"}>
      <MarkIcon>
        {icons.marker}
        <Count>{currentCount}</Count>
      </MarkIcon>
      <Title>Main topic</Title>
    </TopicMainStyle>
  );
};

export default TopicMain;
