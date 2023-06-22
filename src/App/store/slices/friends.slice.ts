import { createSlice } from "@reduxjs/toolkit";

import { IUserTrans } from "../../../utils/interfaces/user";

interface IInit {
  pull: boolean;
  isFriendsWindow: boolean;
  activeSection: string;
  friendsList: IUserTrans[];
  invitedList: IUserTrans[];
  incomingList: IUserTrans[];
  searchList: IUserTrans[];
}

const initialState: IInit = {
  pull: true,
  isFriendsWindow: false,
  activeSection: "friends",
  friendsList: [],
  invitedList: [],
  incomingList: [],
  searchList: [],
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    toggleInviteWindow: (state) => {
      state.isFriendsWindow = !state.isFriendsWindow;
      state.activeSection = "friends";
    },
    // Can be: friends, search, invited
    toggleActiveSection: (state, { payload }) => {
      state.activeSection = payload;
    },
    addLocalDataSearch: (state, { payload }) => {
      state.searchList = payload;
    },
    addLocalDataLists: (state, { payload }) => {
      const { friendsList, invitedList, incomingList } = payload;

      state.friendsList = friendsList;
      state.invitedList = invitedList;
      state.incomingList = incomingList;

      state.pull = false;
    },
    addToList: (state, { payload }) => {
      const { which, user } = payload;

      switch (which) {
        case "friends":
          state.friendsList.push(user);
          break;
        case "invited":
          state.invitedList.push(user);
          break;
        case "incoming":
          state.incomingList.push(user);
          break;
      }
    },
    deleteFromList: (state, { payload }) => {
      const { from, id } = payload;

      switch (from) {
        case "friends":
          state.friendsList = state.friendsList.filter((prof) => prof.id !== id);
          break;
        case "invited":
          state.invitedList = state.invitedList.filter((prof) => prof.id !== id);
          break;
        case "incoming":
          state.incomingList = state.incomingList.filter((prof) => prof.id !== id);
          break;
        case "search":
          state.searchList = state.searchList.filter((prof) => prof.id !== id);
          break;
      }
    },
    updateOneInvited: (state, { payload }) => {
      state.invitedList = state.invitedList.map((user) =>
        user.id === payload.user_id ? { ...user, friend_id: payload.friend_id } : user
      );
    },
  },
});

export const {
  toggleInviteWindow,
  toggleActiveSection,
  addLocalDataLists,
  addLocalDataSearch,
  addToList,
  deleteFromList,
  updateOneInvited,
} = friendsSlice.actions;

export default friendsSlice.reducer;
