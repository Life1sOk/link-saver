import {
  useAddTopicByUserIdMutation,
  useChangeTopicTitleMutation,
  useDeleteTopicMutation,
} from "../../App/store/api/topics";

import { useTopicLocal } from "../helper-dispatch/useTopicLocal";
import { useRequestProcess } from "../helper-dispatch/useRequestProcess";

import { ITopic } from "../interfaces/topic";

export const useTopicLogic = () => {
  const {
    addOneTopicLocal,
    updateOneTopicIdLocal,
    deleteOneTopicLocal,
    updateOneTopicLocal,
  } = useTopicLocal();

  // --------------------- SERVER ------------------------ //

  const [addTopicApi, addTopicApiResult] = useAddTopicByUserIdMutation();
  useRequestProcess(addTopicApiResult);

  const [changeTopicTitleApi, changeTopicTitleApiResult] = useChangeTopicTitleMutation();
  useRequestProcess(changeTopicTitleApiResult);

  const [deleteTopicApi, deleteTopicApiResult] = useDeleteTopicMutation();
  useRequestProcess(deleteTopicApiResult);

  // --------------------- ACTION ------------------------ //

  // ADD TOPIC //
  const addTopic = async (newTopic: ITopic) => {
    // Local Add
    addOneTopicLocal(newTopic);

    // Send request
    await addTopicApi({ user_id: newTopic.user_id, topic_title: newTopic.topic_title })
      .unwrap()
      .then((res) => {
        updateOneTopicIdLocal({ oldId: newTopic.id, newId: res });
      })
      .catch((err) => {
        if (err) {
          // Back changes
          deleteOneTopicLocal(newTopic.id);
        }
      });
  };

  // UPDATE TITLE TOPIC //
  const updateTitleTopic = async (index: number, changedTitle: string, topic: ITopic) => {
    updateOneTopicLocal({ index, title: changedTitle });
    // Server
    await changeTopicTitleApi({
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
  const deleteTopic = async (topic: ITopic) => {
    deleteOneTopicLocal(topic.id);
    // // Server
    await deleteTopicApi({
      id: topic.id,
      user_id: topic.user_id,
    })
      .unwrap()
      .catch((err) => {
        if (err) {
          // Back changes
          addOneTopicLocal(topic);
        }
      });
  };

  return {
    addTopic,
    updateTitleTopic,
    deleteTopic,
  };
};
