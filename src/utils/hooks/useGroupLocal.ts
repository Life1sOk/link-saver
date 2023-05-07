import { useAppDispatch } from "../../App/store/hooks";

import {
  localGroupsStore,
  openGroupPull,
  addOneGroup,
  updateGroupTitle,
  deleteGroup,
  addCurrentLink,
  updateGroupLink,
  updateGroupId,
  updateGroupLinkStatus,
  removeCurrentLink,
  // Window
  toggleGroupWindowHandler,
  activateGroup,
  deactivateGroup,
} from "../../App/store/slices/groups.slice";

import { IGroupGet } from "../../interfaces/group";
import { IShortLink } from "../../interfaces/link";

interface IGroupLink {
  link_data: IShortLink;
  index: number;
}

interface IGLinkStatus {
  link_data: {
    id: number;
    status: boolean;
  };
  index: number;
}

interface IGLinkDelete {
  link_id: number;
  index: number;
}

interface IGroupW {
  title: string;
  id: number;
  group_index: number;
}

interface IUpTitle {
  id: number;
  new_title: string;
}

interface IUpId {
  oldId: number;
  newId: void;
}

export const useGroupLocal = () => {
  const dispatch = useAppDispatch();

  // CRUD
  const addAllGroupsLocal = (arg: IGroupGet[]) => dispatch(localGroupsStore(arg));
  const openGroupPullLocal = () => dispatch(openGroupPull());

  const addOneGroupLocal = (arg: IGroupGet) => dispatch(addOneGroup(arg));
  const updateGroupTitleLocal = (arg: IUpTitle) => dispatch(updateGroupTitle(arg));
  const updateGroupIdLocal = (arg: IUpId) => dispatch(updateGroupId(arg));
  const deleteGroupLocal = (arg: number) => dispatch(deleteGroup(arg));

  // Group link
  const addGroupLinkLocal = (arg: IGroupLink) => dispatch(addCurrentLink(arg));

  const updateGroupLinkLocal = (arg: IGroupLink) => dispatch(updateGroupLink(arg));
  const updateGroupLinkStatusLocal = (arg: IGLinkStatus) =>
    dispatch(updateGroupLinkStatus(arg));

  const deleteGroupLinkLocal = (arg: IGLinkDelete) => dispatch(removeCurrentLink(arg));

  // Window
  const toggleGroupWindow = () => dispatch(toggleGroupWindowHandler());
  const editGroupWindow = (arg: IGroupW) => dispatch(activateGroup(arg));
  const resetGroupWindow = () => dispatch(deactivateGroup());

  return {
    addAllGroupsLocal,
    openGroupPullLocal,
    addOneGroupLocal,
    updateGroupTitleLocal,
    updateGroupIdLocal,
    deleteGroupLocal,
    addGroupLinkLocal,
    updateGroupLinkLocal,
    updateGroupLinkStatusLocal,
    deleteGroupLinkLocal,
    // Window
    toggleGroupWindow,
    editGroupWindow,
    resetGroupWindow,
  };
};
