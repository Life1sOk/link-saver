import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { defaultState } from "../../App/store/slices/active-topic.slice";

import { TopicMainStyle } from "./topic-main.style";

const TopicMain = () => {
  const dispatch = useAppDispatch();
  const currentTopic = useAppSelector((state) => state.activeTopic.current);

  const defaultMain = () => {
    if (currentTopic.topic_title !== "Main") dispatch(defaultState());
  };

  return (
    <TopicMainStyle
      isActive={currentTopic.topic_title === "Main"}
      onClick={defaultMain}
    >
      Main
    </TopicMainStyle>
  );
};

export default TopicMain;
