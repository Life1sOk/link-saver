import {
  useAddTopicByUserIdMutation,
  useChangeTopicTitleMutation,
  useDeleteTopicMutation,
  useLazyGetTopicsGroupCountQuery,
} from "../../App/store/api/topics";

import { useTopicLocal } from "../helper-dispatch/useTopicLocal";
import { useRequestProcess } from "../helpers/useRequestProcess";

import { ITopic } from "../interfaces/topic";

export const useTopicLogic = () => {
  const {
    addOneTopicLocal,
    addTopicCountLocal,
    deleteTopicCountLocal,
    updateOneTopicIdLocal,
    deleteOneTopicLocal,
    updateOneTopicLocal,
  } = useTopicLocal();

  // --------------------- SERVER ------------------------ //
  const [getTopicCount, getTopicCountResult] = useLazyGetTopicsGroupCountQuery();
  useRequestProcess(getTopicCountResult);

  const [addTopicApi, addTopicApiResult] = useAddTopicByUserIdMutation();
  useRequestProcess(addTopicApiResult);

  const [changeTopicTitleApi, changeTopicTitleApiResult] = useChangeTopicTitleMutation();
  useRequestProcess(changeTopicTitleApiResult);

  const [deleteTopicApi, deleteTopicApiResult] = useDeleteTopicMutation();
  useRequestProcess(deleteTopicApiResult);

  // --------------------- ACTION ------------------------ //

  // GET TOPIC'S GROUP COUNT
  const getGroupCount = async (topic: ITopic, user_id: number) => {
    // Server
    return await getTopicCount({ topic_id: topic.id, user_id })
      .unwrap()
      .then((data: { count?: number }) => {
        // Local
        if (data.count) addTopicCountLocal({ key: topic.topic_title, count: data.count });
      })
      // back
      .catch((err) => {
        if (err) {
          deleteTopicCountLocal({ key: topic.topic_title });
        }
      });
  };

  // ADD TOPIC //
  const addTopic = async (newTopic: ITopic, userId: number) => {
    // Local Add
    addTopicCountLocal({ key: newTopic.topic_title, count: 0 });
    addOneTopicLocal(newTopic);

    // Send request
    return await addTopicApi({ user_id: userId, topic_title: newTopic.topic_title })
      .unwrap()
      .then((res) => {
        updateOneTopicIdLocal({ oldId: newTopic.id, newId: res });
      })
      .catch((err) => {
        if (err) {
          // Back changes
          deleteTopicCountLocal({ key: newTopic.topic_title });
          deleteOneTopicLocal(newTopic.id);
        }
      });
  };

  // UPDATE TITLE TOPIC //
  const updateTitleTopic = async (index: number, changedTitle: string, topic: ITopic) => {
    updateOneTopicLocal({ index, title: changedTitle });
    // Server
    return await changeTopicTitleApi({
      id: topic.id,
      topic_title: changedTitle,
    })
      .unwrap()
      .catch((err) => {
        if (err) {
          // Back changes
          updateOneTopicLocal({ index, title: topic.topic_title });
        }
      });
  };

  // DELETE TOPIC //
  const deleteTopic = async (topic: ITopic, userId: number, count: number) => {
    // Local
    deleteOneTopicLocal(topic.id);
    deleteTopicCountLocal({ key: topic.topic_title });

    // // Server
    return await deleteTopicApi({
      id: topic.id,
      user_id: userId,
    })
      .unwrap()
      .catch((err) => {
        if (err) {
          // Back changes
          addOneTopicLocal(topic);
          addTopicCountLocal({ key: topic.topic_title, count });
        }
      });
  };

  return {
    getGroupCount,
    addTopic,
    updateTitleTopic,
    deleteTopic,
  };
};
