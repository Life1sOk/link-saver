import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { IShortLink } from "../../../interfaces/link";

interface IWindowLink {
  isAddLink: boolean;
  activeLink: {
    link: {
      id: number;
      link_title: string;
      link_url: string;
      status: boolean;
    };
    from: string;
  };
}

const initialState: { data: IShortLink[]; window: IWindowLink } = {
  data: [],
  window: {
    isAddLink: false,
    activeLink: {
      link: {
        id: -1,
        link_title: "",
        link_url: "",
        status: false,
      },
      from: "",
    },
  },
};

export const genericsSlice = createSlice({
  name: "local-generics",
  initialState,
  reducers: {
    localGenericsStore: (state, { payload }: PayloadAction<IShortLink[]>) => {
      state.data = payload;
    },
    addOneGeneric: (state, { payload }: PayloadAction<IShortLink>) => {
      state.data.push(payload);
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

      if (!snap.isAddLink) {
        snap.isAddLink = !snap.isAddLink;
        snap.activeLink.link = {
          id: -1,
          link_title: "",
          link_url: "",
          status: false,
        };
        snap.activeLink.from = "";
      } else {
        snap.isAddLink = !snap.isAddLink;
      }
    },
    activateLink: (
      state,
      { payload }: PayloadAction<{ data: IShortLink; from: string }>
    ) => {
      const snap = state.window;

      snap.activeLink.link = payload.data;
      snap.activeLink.from = payload.from;
      snap.isAddLink = true;
    },
  },
});

export const {
  addOneGeneric,
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
