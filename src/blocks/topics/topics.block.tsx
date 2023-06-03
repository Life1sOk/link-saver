import { useEffect } from "react";

import { icons } from "../../utils/react-icons";

import { useAppSelector } from "../../App/store/hooks";
import { useTopicLocal } from "../../utils/helper-dispatch/useTopicLocal";
import { useGetTopicsByUserIdQuery } from "../../App/store/api/topics";

import { ITopic } from "../../utils/interfaces/topic";
import Topic from "../../components/topic/topic.component";

import Blank from "../../components/blank/blank-section.modal";

import { TopicsStyle } from "./topics.style";

const TopicsBlock = () => {
  const userId = useAppSelector((state) => state.user.session.user_id);
  const localTopics = useAppSelector((state) => state.topicsLocal.data);

  const { addAllTopicsLocal, editTopicWindow } = useTopicLocal();

  // RTK query hook for fetching data from the server;
  const { data } = useGetTopicsByUserIdQuery(userId);

  // Add active topic to Redux toolkit
  const activeTopicHandler = (topic: ITopic) => editTopicWindow(topic);

  useEffect(() => {
    if (data && data.length > 0) addAllTopicsLocal(data);
  }, [data, addAllTopicsLocal]);

  return (
    <TopicsStyle>
      {localTopics.length > 0 ? (
        localTopics.map((topic, index) => (
          <Topic
            topic={topic}
            key={topic.id}
            activeHandler={activeTopicHandler}
            index={index}
          />
        ))
      ) : (
        <Blank title="topics" icon={icons.topicOpen} />
      )}
    </TopicsStyle>
  );
};

export default TopicsBlock;
