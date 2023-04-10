import { AiFillFolderOpen } from "react-icons/ai";

import { ITopic } from "../../interfaces/topic";

import { TopicStyle } from "./topic.style";

interface ITopicActive {
  data: ITopic;
  activeHandler: (arg: ITopic) => void;
  isActive: boolean;
}

const Topic = ({ data, activeHandler, isActive }: ITopicActive) => {
  return (
    <TopicStyle onClick={() => activeHandler(data)} isActive={isActive}>
      <AiFillFolderOpen />
      <p>{data.topic_title}</p>
    </TopicStyle>
  );
};

export default Topic;
