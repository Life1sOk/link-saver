import { useState } from "react";

import { icons } from "../../utils/react-icons";

import { ITopic } from "../../interfaces/topic";

import { TopicStyle } from "./topic.style";

interface ITopicActive {
  data: ITopic;
  activeHandler: (arg: ITopic) => void;
  isActive: boolean;
}

const Topic = ({ data, activeHandler, isActive }: ITopicActive) => {
  const [isActiveType, setIsActiveType] = useState(false);

  return (
    <TopicStyle
      onClick={() => activeHandler(data)}
      isActive={isActive}
      onDoubleClick={() => setIsActiveType(true)}
    >
      {icons.topicOpen}
      {/* {isActiveType ? (
        <input type="text" defaultValue={data.topic_title} />
      ) : ( */}
      <p>{data.topic_title}</p>
      {/* )} */}
    </TopicStyle>
  );
};

export default Topic;
