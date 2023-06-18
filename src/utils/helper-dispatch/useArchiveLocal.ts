import { useAppDispatch, useAppSelector } from "../../App/store/hooks";

import { IShortLink } from "../interfaces/link";

import {
  toggleArchiveWindow,
  toggleActiveArchive,
  addLinkIntoArchive,
  deleteLinkFromArchive,
} from "../../App/store/slices/archive.slice";

export const useArchiveLocal = () => {
  const dispatch = useAppDispatch();
  const groupsLocal = useAppSelector((state) => state.groupsLocal.data);

  const toggleArchiveWindowLocal = () => dispatch(toggleArchiveWindow());
  const toggleActiveArchiveLocal = (arg: "links" | "groups") =>
    dispatch(toggleActiveArchive(arg));
  const addLinkIntoArchiveLocal = (link: IShortLink) =>
    dispatch(addLinkIntoArchive(link));
  const deleteLinkFromArchiveLocal = (link_id: number) =>
    dispatch(deleteLinkFromArchive(link_id));

  const addLinksFromDeletedGroup = (group_id: number) => {
    groupsLocal.forEach((group) => {
      if (group.id === group_id) {
        group.links.forEach((link) => addLinkIntoArchiveLocal(link));
      }
    });
  };

  const deleteLinksFromDeletedGroup = (group_id: number) => {
    groupsLocal.forEach((group) => {
      if (group.id === group_id) {
        group.links.forEach((link) => deleteLinkFromArchiveLocal(link.id));
      }
    });
  };

  return {
    toggleArchiveWindowLocal,
    toggleActiveArchiveLocal,
    addLinkIntoArchiveLocal,
    addLinksFromDeletedGroup,
    deleteLinkFromArchiveLocal,
    deleteLinksFromDeletedGroup,
  };
};
