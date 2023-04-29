import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { activeTopicStore } from "../../App/store/slices/active-topic.slice";
import { addTopics } from "../../App/store/slices/topics.slice";

import { useGetTopicsByUserIdQuery } from "../../App/store/api/topics";

import { ITopic } from "../../interfaces/topic";
import Topic from "../../components/topic/topic.component";

import { TopicsStyle } from "./topics.style";

const TopicsBlock = () => {
  const dispatch = useAppDispatch();

  const userId = useAppSelector((state) => state.user.session.user_id);
  const localTopics = useAppSelector((state) => state.topicsLocal.data);

  // RTK query hook for fetching data from the server;
  const { data } = useGetTopicsByUserIdQuery(userId);

  // Add active topic to Redux toolkit
  const activeTopicHandler = (topic: ITopic) =>
    dispatch(activeTopicStore(topic));

  useEffect(() => {
    if (data) dispatch(addTopics(data));
  }, [dispatch, data]);

  return (
    <TopicsStyle>
      {localTopics.map((topic, index) => (
        <Topic
          topic={topic}
          key={topic.id}
          activeHandler={activeTopicHandler}
          index={index}
        />
      ))}
    </TopicsStyle>
  );
};

export default TopicsBlock;
