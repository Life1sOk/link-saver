import { useAppDispatch } from "../App/store/hooks";

import {
  localGroupsStore,
  addOneGroup,
  updateGroupTitle,
  deleteGroup,
  addCurrentLink,
  updateGroupLink,
  updateGroupLinkStatus,
  removeCurrentLink,
} from "../App/store/slices/groups.slice";

import { IGroupGet } from "../interfaces/group";
import { IShortLink } from "../interfaces/link";

interface IGroupLink {
  link_data: IShortLink;
  index: number;
}

interface IGroupLinkStatus {
  link_data: {
    id: number;
    status: boolean;
  };
  index: number;
}

interface IGroupLinkDelete {
  link_id: number;
  index: number;
}

export const useGroupLocal = () => {
  const dispatch = useAppDispatch();

  const addAllGroupsLocal = (arg: IGroupGet[]) => dispatch(localGroupsStore(arg));

  const addOneGroupLocal = (arg: IGroupGet) => dispatch(addOneGroup(arg));
  const updateGroupTitleLocal = (arg: { id: number; new_title: string }) =>
    dispatch(updateGroupTitle(arg));
  const deleteGroupLocal = (arg: number) => dispatch(deleteGroup(arg));

  const addGroupLinkLocal = (arg: IGroupLink) => dispatch(addCurrentLink(arg));
  const updateGroupLinkLocal = (arg: IGroupLink) => dispatch(updateGroupLink(arg));
  const updateGroupLinkStatusLocal = (arg: IGroupLinkStatus) =>
    dispatch(updateGroupLinkStatus(arg));
  const deleteGroupLinkLocal = (arg: IGroupLinkDelete) =>
    dispatch(removeCurrentLink(arg));

  return {
    addAllGroupsLocal,
    addOneGroupLocal,
    updateGroupTitleLocal,
    deleteGroupLocal,
    addGroupLinkLocal,
    updateGroupLinkLocal,
    updateGroupLinkStatusLocal,
    deleteGroupLinkLocal,
  };
};
