import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { activeTopic } from "../../App/store/slices/active-topic.slice";

import { useGetTopicsByUserIdQuery } from "../../App/store/api/topics";

import { ITopic } from "../../interfaces/topic";
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
  const activeTopicId = useAppSelector((state) => state.activeTopic.current.id);

  // RTK query hook for fetching data from the server;
  const { data, error, isLoading, isSuccess } = useGetTopicsByUserIdQuery(2);

  // Add active topic to Redux toolkit
  const activeTopicHandler = (topic: ITopic) => dispatch(activeTopic(topic));

  useEffect(() => {
    // Make first topic active - Default
    if (isSuccess) dispatch(activeTopic(data[0]));
  }, [isSuccess, dispatch, data]);

  return (
    <TopicsStyle>
      {data?.map((topic) => (
        <Topic
          data={topic}
          key={topic.id}
          activeHandler={activeTopicHandler}
          isActive={activeTopicId === topic.id}
        />
      ))}
    </TopicsStyle>
  );
};

export default TopicsBlock;
