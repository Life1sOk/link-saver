import {
  useAddGroupMutation,
  useDeleteGroupMutation,
  useLazyGetGroupsByTopicIdQuery,
  useChangeGroupMutation,
} from "../../App/store/api/groups";

import { useGroupLocal } from "../helper-dispatch/useGroupLocal";
import { useRequestProcess } from "../helper-dispatch/useRequestProcess";

import { IGroupGet, IGroupChange, IAddGroup } from "../interfaces/group";

export const useGroupsLogic = () => {
  // --------------------- LOCAL ------------------------ //
  const {
    deleteGroupLocal,
    updateGroupIdLocal,
    updateGroupTitleLocal,
    addOneGroupLocal,
    addAllGroupsLocal,
  } = useGroupLocal();

  // --------------------- SERVER ------------------------ //

  const [getGroupsApi, getGroupsApiResult] = useLazyGetGroupsByTopicIdQuery();
  useRequestProcess(getGroupsApiResult);

  const [addGroupApi, addGroupApiResult] = useAddGroupMutation();
  useRequestProcess(addGroupApiResult);

  const [changeGroupTitleApi, changeGroupTitleApiResult] = useChangeGroupMutation();
  useRequestProcess(changeGroupTitleApiResult);

  const [deleteGroupApi, deleteGroupApiResult] = useDeleteGroupMutation();
  useRequestProcess(deleteGroupApiResult);

  // --------------------- ACTION ------------------------ //

  // GET GROUPS //
  const getGroupsStore = async (id: number, user_id: number) => {
    let ids = { topic_id: id, user_id };
    //
    await getGroupsApi(ids)
      .unwrap()
      .then((data) => addAllGroupsLocal(data));
  };

  // ADD GROUP //
  const addGroup = async (group: IAddGroup) => {
    // Local add
    addOneGroupLocal(group);
    // Send data
    await addGroupApi(group)
      .unwrap()
      .then((res) => {
        updateGroupIdLocal({ oldId: group.id, newId: res });
      })
      .catch((err) => {
        // Back changes
        if (err) {
          deleteGroupLocal(group.id);
        }
      });
  };

  // UPDATE TITLE //
  const updateTitleGroup = async (newTitle: IGroupChange, oldTitle: IGroupChange) => {
    // Local
    updateGroupTitleLocal(newTitle);

    // Send changes
    await changeGroupTitleApi(newTitle)
      .unwrap()
      .catch((err) => {
        if (err) {
          // back chages
          updateGroupTitleLocal(oldTitle);
        }
      });
  };

  // DELETE GROUP //
  const deleteGroup = async (user_id: number, group_id: number, data: IGroupGet) => {
    // local
    deleteGroupLocal(group_id);
    // server
    await deleteGroupApi({
      id: group_id,
      user_id,
    })
      .unwrap()
      .catch((err) => {
        if (err) {
          // Back changes
          addOneGroupLocal(data);
        }
      });
  };

  return {
    deleteGroup,
    getGroupsStore,
    getGroupsStoreResult: getGroupsApiResult,
    addGroup,
    updateTitleGroup,
  };
};
