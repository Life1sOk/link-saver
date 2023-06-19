import { useAppDispatch } from "../../App/store/hooks";

import { IShortLink } from "../interfaces/link";
import { IGroupGet } from "../interfaces/group";

import {
  toggleArchiveWindow,
  toggleActiveArchive,
  addLinkIntoArchive,
  addGroupIntoArchive,
  deleteLinkFromArchive,
  deleteGroupsFromArchive,
} from "../../App/store/slices/archive.slice";

export const useArchiveLocal = () => {
  const dispatch = useAppDispatch();

  const toggleArchiveWindowLocal = () => dispatch(toggleArchiveWindow());

  const toggleActiveArchiveLocal = (arg: "links" | "groups") =>
    dispatch(toggleActiveArchive(arg));

  const addLinkIntoArchiveLocal = (link: IShortLink) =>
    dispatch(addLinkIntoArchive(link));

  const deleteLinkFromArchiveLocal = (link_id: number) =>
    dispatch(deleteLinkFromArchive(link_id));

  const addGroupIntoArchiveLocal = (group: { topic_title: string; group: IGroupGet }) =>
    dispatch(addGroupIntoArchive(group));

  const deleteGroupsFromArchiveLocal = (group_id: number) =>
    dispatch(deleteGroupsFromArchive(group_id));

  return {
    toggleArchiveWindowLocal,
    toggleActiveArchiveLocal,
    addLinkIntoArchiveLocal,
    addGroupIntoArchiveLocal,
    deleteLinkFromArchiveLocal,
    deleteGroupsFromArchiveLocal,
  };
};
