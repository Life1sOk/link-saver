import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { IShortLink } from "../../../utils/interfaces/link";
import { IGroupAdd } from "../../../utils/interfaces/group";

interface IWindowLink {
  isAddLink: boolean;
  activeLink: {
    type: "add" | "edit";
    link: {
      id: number;
      link_title: string;
      link_url: string;
      status: boolean;
    };
    from: "generics" | IGroupAdd;
  };
}

const initialState: { pull: boolean; data: IShortLink[]; window: IWindowLink } = {
  pull: true,
  data: [],
  window: {
    isAddLink: false,
    activeLink: {
      type: "add",
      link: {
        id: -1,
        link_title: "",
        link_url: "",
        status: false,
      },
      from: "generics",
    },
  },
};

export const genericsSlice = createSlice({
  name: "local-generics",
  initialState,
  reducers: {
    localGenericsStore: (state, { payload }: PayloadAction<IShortLink[]>) => {
      if (state.pull) {
        state.data = payload;
        state.pull = false;
      }
    },
    addOneGeneric: (state, { payload }: PayloadAction<IShortLink>) => {
      state.data.push(payload);
    },
    addOneFromGroup: (state, { payload }) => {
      state.window.activeLink.from = payload;
    },
    updateOneGeneric: (state, { payload }: PayloadAction<IShortLink>) => {
      state.data = state.data.map((link) => (link.id === payload.id ? payload : link));
    },
    updateOneStatusGeneric: (state, { payload }) => {
      state.data = state.data.map((link) =>
        link.id === payload.id ? { ...link, status: payload.status } : link
      );
    },
    updateOneGenericId: (state, { payload }) => {
      const { oldId, newId } = payload;
      state.data = state.data.map((link) =>
        link.id === oldId ? (link = { ...link, id: newId.id }) : link
      );
    },
    deleteOneGeneric: (state, { payload }: PayloadAction<number>) => {
      state.data = state.data.filter((link) => link.id !== payload);
    },
    // Window
    toggleLinkWindowHandler: (state) => {
      const snap = state.window;

      if (snap.isAddLink) {
        snap.isAddLink = !snap.isAddLink;
        snap.activeLink.link = {
          id: -1,
          link_title: "",
          link_url: "",
          status: false,
        };
        snap.activeLink.from = "generics";
      } else {
        snap.isAddLink = !snap.isAddLink;
        snap.activeLink.type = "add";
      }
    },
    activateLink: (
      state,
      {
        payload,
      }: PayloadAction<{
        data: IShortLink;
        from: "generics" | IGroupAdd;
      }>
    ) => {
      const snap = state.window;

      snap.activeLink.link = payload.data;
      snap.activeLink.from = payload.from;
      snap.activeLink.type = "edit";
      snap.isAddLink = true;
    },
  },
});

export const {
  addOneGeneric,
  addOneFromGroup,
  localGenericsStore,
  updateOneStatusGeneric,
  updateOneGenericId,
  updateOneGeneric,
  deleteOneGeneric,
  // Window
  toggleLinkWindowHandler,
  activateLink,
} = genericsSlice.actions;

export default genericsSlice.reducer;
