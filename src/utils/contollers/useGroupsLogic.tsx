import {
  useAddGroupMutation,
  useDeleteGroupMutation,
  useLazyGetGroupsByTopicIdQuery,
  useChangeGroupMutation,
  useTransactionGroupMutation,
} from "../../App/store/api/groups";

import { useGroupLocal } from "../helper-dispatch/useGroupLocal";
import { useTopicLocal } from "../helper-dispatch/useTopicLocal";
import { useArchiveLocal } from "../helper-dispatch/useArchiveLocal";
import { useRequestProcess } from "../helpers/useRequestProcess";

import { IGroupGet, IGroupChange, IAddGroup } from "../interfaces/group";
import { ITopic } from "../interfaces/topic";

export const useGroupsLogic = () => {
  // --------------------- LOCAL ------------------------ //
  const {
    deleteGroupLocal,
    updateGroupIdLocal,
    updateGroupTitleLocal,
    addOneGroupLocal,
    addAllGroupsLocal,
  } = useGroupLocal();

  const { incTopicCountLocal, decTopicCountLocal } = useTopicLocal();

  const { addGroupIntoArchiveLocal, deleteGroupFromArchiveLocal } = useArchiveLocal();

  // --------------------- SERVER ------------------------ //

  const [getGroupsApi, getGroupsApiResult] = useLazyGetGroupsByTopicIdQuery();
  useRequestProcess(getGroupsApiResult);

  const [addGroupApi, addGroupApiResult] = useAddGroupMutation();
  useRequestProcess(addGroupApiResult);

  const [changeGroupTitleApi, changeGroupTitleApiResult] = useChangeGroupMutation();
  useRequestProcess(changeGroupTitleApiResult);

  const [deleteGroupApi, deleteGroupApiResult] = useDeleteGroupMutation();
  useRequestProcess(deleteGroupApiResult);

  const [transitionGroupApi, transitionGroupApiResult] = useTransactionGroupMutation();
  useRequestProcess(transitionGroupApiResult);

  // --------------------- ACTION ------------------------ //

  // GET GROUPS //
  const getGroupsStore = async (id: number, user_id: number) => {
    let ids = { topic_id: id, user_id };
    //
    return await getGroupsApi(ids)
      .unwrap()
      .then((data) => addAllGroupsLocal(data));
  };

  // ADD GROUP //
  const addGroup = async (group: IAddGroup, topic_title: string) => {
    // Local add
    addOneGroupLocal(group);
    incTopicCountLocal({ key: topic_title });
    // Send data

    return await addGroupApi(group)
      .unwrap()
      .then((res) => {
        updateGroupIdLocal({ oldId: group.id, newId: res });
      })
      .catch((err) => {
        // Back changes
        if (err) {
          deleteGroupLocal(group.id);
          decTopicCountLocal({ key: topic_title });
        }
      });
  };

  // UPDATE TITLE //
  const updateTitleGroup = async (newTitle: IGroupChange, oldTitle: IGroupChange) => {
    // Local
    updateGroupTitleLocal(newTitle);

    // Send changes
    return await changeGroupTitleApi(newTitle)
      .unwrap()
      .catch((err) => {
        if (err) {
          // back chages
          updateGroupTitleLocal(oldTitle);
        }
      });
  };

  // DELETE GROUP //
  const deleteGroup = async (
    user_id: number,
    group_id: number,
    data: IGroupGet,
    topic_title: string
  ) => {
    // local
    deleteGroupLocal(group_id);
    addGroupIntoArchiveLocal({ topic_title, group: data });
    decTopicCountLocal({ key: topic_title });
    // server
    return await deleteGroupApi({ id: group_id, user_id })
      .unwrap()
      .catch((err) => {
        if (err) {
          // Back changes
          addOneGroupLocal(data);
          deleteGroupFromArchiveLocal(group_id);
          incTopicCountLocal({ key: topic_title });
        }
      });
  };

  // TRANSITION GROUP TO ANOTHER TOPIC //
  const transitionToTopic = async (
    topic: ITopic,
    group: IGroupGet,
    oldTopic_title: string
  ) => {
    const { id: topic_id, topic_title } = topic;
    const { id: group_id } = group;

    //Local
    deleteGroupLocal(group_id);
    incTopicCountLocal({ key: topic_title });
    decTopicCountLocal({ key: oldTopic_title });

    // Server
    return await transitionGroupApi({ new_topic_id: topic_id, group_id })
      .unwrap()
      .then(console.log)
      .catch((err) => {
        if (err) {
          // Back changes
          addOneGroupLocal(group);
          decTopicCountLocal({ key: topic_title });
          incTopicCountLocal({ key: oldTopic_title });
        }
      });
  };

  return {
    deleteGroup,
    getGroupsStore,
    getGroupsStoreResult: getGroupsApiResult,
    addGroup,
    updateTitleGroup,
    transitionToTopic,
  };
};
