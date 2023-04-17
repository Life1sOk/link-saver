import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { activeTopic } from "../../App/store/slices/active-topic.slice";

import { useGetTopicsByUserIdQuery } from "../../App/store/api/topics";

import { ITopic } from "../../interfaces/topic";
import TopicMain from "../../components/topic-main/topic-main.component";
import Topic from "../../components/topic/topic.component";

import { TopicsStyle } from "./topics.style";

/* Expected Array of objects from back-end - 
    topics = {
        id: number,
        user_id: number,
        topic_title: string,
        created_at: date | string,
    }[]
*/

const TopicsBlock = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.data.id);

  // RTK query hook for fetching data from the server;
  const { data, error, isLoading, isSuccess } =
    useGetTopicsByUserIdQuery(userId);

  // Add active topic to Redux toolkit
  const activeTopicHandler = (topic: ITopic) => dispatch(activeTopic(topic));

  return (
    <TopicsStyle>
      <TopicMain />
      {data?.map((topic) => (
        <Topic
          topic={topic}
          key={topic.id}
          activeHandler={activeTopicHandler}
        />
      ))}
    </TopicsStyle>
  );
};

export default TopicsBlock;
