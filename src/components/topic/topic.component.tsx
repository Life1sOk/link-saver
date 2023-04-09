import { AiFillFolderOpen } from "react-icons/ai";

import { ITopic } from "../../interfaces/topic";

import { TopicStyle } from "./topic.style";

const Topic = ({ data }: { data: ITopic }) => {
  return (
    <TopicStyle>
      <AiFillFolderOpen />
      <p>{data.topic_title}</p>
    </TopicStyle>
  );
};

export default Topic;
