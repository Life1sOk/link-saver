import { useAppDispatch } from "../../App/store/hooks";

import { IUser } from "../interfaces/user";

import {
  toggleInviteWindow,
  toggleActiveSection,
  addLocalDataLists,
  addLocalDataSearch,
  addToList,
  deleteFromList,
  updateOneInvited,
} from "../../App/store/slices/friends.slice";

interface IAllLists {
  friendsList: IUser[];
  invitedList: IUser[];
  incomingList: IUser[];
}

interface IToList {
  which?: string;
  user: IUser;
}

interface IFromList {
  from: string;
  id: number;
}

interface IUpInvited {
  user_id: number;
  friend_id: number;
}

export const useFriendsLocal = () => {
  const dispatch = useAppDispatch();

  // CRUD
  const addAllListsLocal = (arg: IAllLists) => dispatch(addLocalDataLists(arg));
  const addSearchListLocal = (arg: IUser[]) => dispatch(addLocalDataSearch(arg));
  const addOneToListLocal = (arg: IToList) => dispatch(addToList(arg));
  const deleteOneFromListLocal = (arg: IFromList) => dispatch(deleteFromList(arg));
  const updateOneFromInvitedLocal = (arg: IUpInvited) => dispatch(updateOneInvited(arg));

  //Toggle
  const toggleActiveList = (arg: string) => dispatch(toggleActiveSection(arg));
  const toggleFriendsWindow = () => dispatch(toggleInviteWindow());

  return {
    addAllListsLocal,
    addSearchListLocal,
    addOneToListLocal,
    deleteOneFromListLocal,
    updateOneFromInvitedLocal,
    // toggle
    toggleActiveList,
    toggleFriendsWindow,
  };
};
