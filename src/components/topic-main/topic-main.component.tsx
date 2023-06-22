import { useEffect } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useTopicLocal } from "../../utils/helper-dispatch/useTopicLocal";
import { useTopicLogic } from "../../utils/contollers/useTopicLogic";

import SectionCount from "../../shared/section-count/section-count.shared";
import Mark from "../../shared/mark/mark.shared";

import { TopicMainStyle, Title, CountWrapper } from "./topic-main.style";

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
      <Mark sectionType="topic" />
      <Title>Main topic</Title>
      {activeTopic.topic_title !== "Main" && (
        <CountWrapper>
          <SectionCount sectionType="topic" count={currentCount} />
        </CountWrapper>
      )}
    </TopicMainStyle>
  );
};

export default TopicMain;
