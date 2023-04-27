import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { activeTopicStore } from "../../App/store/slices/active-topic.slice";

import { useGetTopicsByUserIdQuery } from "../../App/store/api/topics";

import { ITopic } from "../../interfaces/topic";
import Topic from "../../components/topic/topic.component";

import { TopicsStyle, TopicsWrapper, TopicLine } from "./topics.style";

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
  const userId = useAppSelector((state) => state.user.session.user_id);

  // RTK query hook for fetching data from the server;
  const { data } = useGetTopicsByUserIdQuery(userId);

  // Add active topic to Redux toolkit
  const activeTopicHandler = (topic: ITopic) =>
    dispatch(activeTopicStore(topic));

  return (
    <TopicsStyle>
      <TopicLine />
      <TopicsWrapper>
        {data?.map((topic) => (
          <Topic
            topic={topic}
            key={topic.id}
            activeHandler={activeTopicHandler}
          />
        ))}
      </TopicsWrapper>
      <TopicLine />
    </TopicsStyle>
  );
};

export default TopicsBlock;
