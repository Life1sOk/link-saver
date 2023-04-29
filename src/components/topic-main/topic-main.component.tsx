import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { defaultState } from "../../App/store/slices/active-topic.slice";

import { icons } from "../../utils/react-icons";

import { TopicMainStyle, Title, MarkIcon } from "./topic-main.style";

const TopicMain = () => {
  const dispatch = useAppDispatch();
  const currentTopic = useAppSelector((state) => state.activeTopic.current);

  const defaultMain = () => {
    if (currentTopic.topic_title !== "Main") dispatch(defaultState());
  };

  return (
    <TopicMainStyle
      onClick={defaultMain}
      isActive={currentTopic.topic_title === "Main"}
    >
      <MarkIcon>{icons.marker}</MarkIcon>
      <Title>Main desk</Title>
    </TopicMainStyle>
  );
};

export default TopicMain;
