import { useAppDispatch } from "../../App/store/hooks";

import { IShortLink } from "../interfaces/link";
import { IGroupGet } from "../interfaces/group";

import {
  addToArchiveAll,
  toggleArchiveWindow,
  toggleActiveArchive,
  addLinkIntoArchive,
  addGroupIntoArchive,
  deleteLinkFromArchive,
  deleteGroupsFromArchive,
  deleteGroupsFromArchiveByTopic,
} from "../../App/store/slices/archive.slice";

interface IAllArch {
  links: IShortLink[];
  groups: { topic_title: string; group: IGroupGet }[];
}

export const useArchiveLocal = () => {
  const dispatch = useAppDispatch();

  const addToArchiveAllLocal = (arg: IAllArch) => dispatch(addToArchiveAll(arg));

  const toggleArchiveWindowLocal = () => dispatch(toggleArchiveWindow());

  const toggleActiveArchiveLocal = (arg: "links" | "groups") =>
    dispatch(toggleActiveArchive(arg));

  const addLinkIntoArchiveLocal = (link: IShortLink) =>
    dispatch(addLinkIntoArchive(link));

  const deleteLinkFromArchiveLocal = (link_id: number) =>
    dispatch(deleteLinkFromArchive(link_id));

  const addGroupIntoArchiveLocal = (group: { topic_title: string; group: IGroupGet }) =>
    dispatch(addGroupIntoArchive(group));

  const deleteGroupFromArchiveLocal = (group_id: number) =>
    dispatch(deleteGroupsFromArchive(group_id));

  const addAllGroupIntoArchiveLocal = (groups: IGroupGet[], activeTopic: string) => {
    groups.forEach((group) =>
      addGroupIntoArchiveLocal({ topic_title: activeTopic, group })
    );
  };

  const deleteGroupsFromArchiveByTopicLocal = (topic_title: string) => {
    dispatch(deleteGroupsFromArchiveByTopic(topic_title));
  };

  return {
    addToArchiveAllLocal,
    toggleArchiveWindowLocal,
    toggleActiveArchiveLocal,
    addLinkIntoArchiveLocal,
    addGroupIntoArchiveLocal,
    deleteLinkFromArchiveLocal,
    deleteGroupFromArchiveLocal,
    addAllGroupIntoArchiveLocal,
    deleteGroupsFromArchiveByTopicLocal,
  };
};
