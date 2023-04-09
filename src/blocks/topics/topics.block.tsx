import { useGetTopicsByUserIdQuery } from "../../App/store/api/topics";

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
  // RTK query hook for fetching data from the server;
  const { data, error, isLoading } = useGetTopicsByUserIdQuery(2);

  return (
    <TopicsStyle>
      {data?.map((topic) => (
        <Topic data={topic} key={topic.id} />
      ))}
    </TopicsStyle>
  );
};

export default TopicsBlock;
