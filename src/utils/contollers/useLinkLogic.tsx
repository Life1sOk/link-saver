import {
  useAddGenericLinkMutation,
  useChangeLinkTitleOrUrlMutation,
  useDeleteLinkSnapshotMutation,
  useTransitionToMutation,
  useChangeLinkStatusMutation,
} from "../../App/store/api/links";

import { useGenericLocal } from "../helper-dispatch/useGenericLocal";
import { useGroupLocal } from "../helper-dispatch/useGroupLocal";
import { useRequestProcess } from "../helpers/useRequestProcess";
import { useArchiveLocal } from "../helper-dispatch/useArchiveLocal";

import {
  IAddGeneric,
  IShortLink,
  ILinkStatus,
  ITransGroup,
  ITransGroupToGroup,
} from "../interfaces/link";

export const useLinkLogic = () => {
  // --------------------- LOCAL ------------------------ //
  const {
    addOneGenericLocal,
    updateOneGenericIdLocal,
    deleteOneGenericLocal,
    updateOneGenericLocal,
    updateOneStatusGenericLocal,
  } = useGenericLocal();

  const {
    updateGroupLinkLocal,
    updateGroupLinkIdLocal,
    deleteGroupLinkLocal,
    addGroupLinkLocal,
    updateGroupLinkStatusLocal,
  } = useGroupLocal();

  const { addLinkIntoArchiveLocal, deleteLinkFromArchiveLocal } = useArchiveLocal();

  // --------------------- SERVER ------------------------ //

  const [addGenericLinkApi, addGenericLinkApiResult] = useAddGenericLinkMutation();
  useRequestProcess(addGenericLinkApiResult);

  const [updateLinkApi, updateLinkApiResult] = useChangeLinkTitleOrUrlMutation();
  useRequestProcess(updateLinkApiResult);

  const [changeLinkStatusApi, changeLinkStatusApiStatus] = useChangeLinkStatusMutation();
  useRequestProcess(changeLinkStatusApiStatus);

  const [changeGroupLinkApi, changeGroupLinkApiResult] = useTransitionToMutation();
  useRequestProcess(changeGroupLinkApiResult);

  const [deleteSnapshotApi, deleteSnapshotApiResult] = useDeleteLinkSnapshotMutation();
  useRequestProcess(deleteSnapshotApiResult);

  // --------------------- ACTION ------------------------ //

  // ADD LINK //
  const addLinkGeneric = async (link: IAddGeneric) => {
    // Add locally
    addOneGenericLocal(link);
    // Send data
    return await addGenericLinkApi(link)
      .unwrap()
      .then((res) => {
        // Change custom id
        updateOneGenericIdLocal({ oldId: link.id, newId: res });
      })
      .catch((error) => {
        if (error) {
          // revers changes
          deleteOneGenericLocal(link.id);
        }
      });
  };

  const addLinkGroup = async (link: IAddGeneric, index: number) => {
    // Add locally
    addGroupLinkLocal({ link_data: link, index });
    // Send data
    return await addGenericLinkApi(link)
      .unwrap()
      .then((res) => {
        // Change custom id
        updateGroupLinkIdLocal({ oldId: link.id, newId: res, index });
      })
      .catch((error) => {
        if (error) {
          // revers changes
          deleteGroupLinkLocal({ link_id: link.id, index });
        }
      });
  };

  // UPDATE LINK TITLE/URL //
  const updateLink = async (
    from: "generics" | number,
    updatedLink: IShortLink,
    oldLink: IShortLink
  ) => {
    // Update locally
    if (from === "generics") {
      updateOneGenericLocal(updatedLink);
    } else {
      updateGroupLinkLocal({
        index: from,
        link_data: updatedLink,
      });
    }

    // If all not much so we should update link
    return await updateLinkApi(updatedLink)
      .unwrap()
      .catch((err) => {
        // Back changes
        if (err) {
          if (from === "generics") {
            updateOneGenericLocal(oldLink);
          } else {
            updateGroupLinkLocal({
              index: from,
              link_data: oldLink,
            });
          }
        }
      });
  };

  // UPDATE LINK TITLE //
  const updateStatusLink = async (
    position: "generics" | number,
    newStatus: ILinkStatus,
    oldStatus: ILinkStatus
  ) => {
    // Helper
    const statusLocalChange = (status: ILinkStatus) => {
      if (position === "generics") {
        updateOneStatusGenericLocal(status);
      } else {
        updateGroupLinkStatusLocal({
          link_data: status,
          index: position,
        });
      }
    };

    // Local changes
    statusLocalChange(newStatus);

    // Server changes
    return await changeLinkStatusApi(newStatus)
      .unwrap()
      .catch((err) => {
        // Back changes
        if (err) {
          statusLocalChange(oldStatus);
        }
      });
  };

  // TRANSITION LINK TO GENERICS or GROUPS //
  const linkTransitionToGeneric = async (data: IShortLink, group_index: number) => {
    // Local change - removee from group
    deleteGroupLinkLocal({ link_id: data.id, index: group_index });
    // Local change - add to generics
    addOneGenericLocal(data);
    // // Server change
    return await changeGroupLinkApi({ id: data.id, group_id: null })
      .unwrap()
      .catch((err) => {
        if (err) {
          deleteOneGenericLocal(data.id);
          addGroupLinkLocal({ link_data: data, index: group_index });
        }
      });
  };

  const linkTransitionToGroup = async ({ data, group_index, group_id }: ITransGroup) => {
    // Local change - generic remove
    deleteOneGenericLocal(data.id);
    // Local change - group add link
    addGroupLinkLocal({ link_data: data, index: group_index });
    // Server changes

    return await changeGroupLinkApi({ id: data?.id, group_id })
      .unwrap()
      .catch((err) => {
        // Back changes
        if (err) {
          deleteGroupLinkLocal({ link_id: data.id, index: group_index });
          addOneGenericLocal(data);
        }
      });
  };

  const linkTransitionFromGroupToGroup = async ({
    data,
    old_group_index,
    new_group_index,
    group_id,
  }: ITransGroupToGroup) => {
    // Local change - removee from group
    deleteGroupLinkLocal({ link_id: data.id, index: old_group_index });
    // Local change - group add link
    addGroupLinkLocal({ link_data: data, index: new_group_index });
    // Server changes

    return await changeGroupLinkApi({ id: data?.id, group_id })
      .unwrap()
      .catch((err) => {
        // Back changes
        if (err) {
          deleteGroupLinkLocal({ link_id: data.id, index: new_group_index });
          addGroupLinkLocal({ link_data: data, index: old_group_index });
        }
      });
  };

  // DELETE LINK //
  const deleteGroupLink = async (data: IShortLink, index: number) => {
    // Local
    deleteGroupLinkLocal({ link_id: data.id, index });
    addLinkIntoArchiveLocal(data);
    // Server
    return await deleteSnapshotApi({ id: data.id })
      .unwrap()
      .catch((err) => {
        // Back changes
        if (err) {
          addGroupLinkLocal({ link_data: data, index });
          deleteLinkFromArchiveLocal(data.id);
        }
      });
  };

  const deleteGenericLink = async (data: IShortLink) => {
    // Local
    deleteOneGenericLocal(data.id);
    addLinkIntoArchiveLocal(data);
    // Server
    return await deleteSnapshotApi({ id: data.id })
      .unwrap()
      .catch((err) => {
        // Back changes
        if (err) {
          addOneGenericLocal(data);
          deleteLinkFromArchiveLocal(data.id);
        }
      });
  };

  return {
    addLinkGeneric,
    addLinkGroup,
    updateLink,
    updateStatusLink,
    linkTransitionToGeneric,
    linkTransitionToGroup,
    linkTransitionFromGroupToGroup,
    deleteGroupLink,
    deleteGenericLink,
  };
};
