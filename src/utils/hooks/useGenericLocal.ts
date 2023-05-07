import { useAppDispatch } from "../../App/store/hooks";

import {
  localGenericsStore,
  addOneGeneric,
  updateOneStatusGeneric,
  updateOneGenericId,
  updateOneGeneric,
  deleteOneGeneric,
  // Window
  toggleLinkWindowHandler,
  activateLink,
} from "../../App/store/slices/generics.slice";

import { IShortLink } from "../../interfaces/link";

interface IUpId {
  oldId: number;
  newId: void;
}

export const useGenericLocal = () => {
  const dispatch = useAppDispatch();

  // CRUD
  const addAllGenericsLocal = (arg: IShortLink[]) => dispatch(localGenericsStore(arg));
  const addOneGenericLocal = (arg: IShortLink) => dispatch(addOneGeneric(arg));

  const updateOneGenericLocal = (arg: IShortLink) => dispatch(updateOneGeneric(arg));
  const updateOneStatusGenericLocal = (arg: { id: number; status: boolean }) =>
    dispatch(updateOneStatusGeneric(arg));
  const updateOneGenericIdLocal = (arg: IUpId) => dispatch(updateOneGenericId(arg));

  const deleteOneGenericLocal = (arg: number) => dispatch(deleteOneGeneric(arg));

  // Window
  const toggleLinkWindow = () => dispatch(toggleLinkWindowHandler());
  const editLinkWindow = (arg: { data: IShortLink; from: string }) =>
    dispatch(activateLink(arg));

  return {
    addAllGenericsLocal,
    addOneGenericLocal,
    updateOneGenericLocal,
    updateOneGenericIdLocal,
    updateOneStatusGenericLocal,
    deleteOneGenericLocal,
    // Window
    toggleLinkWindow,
    editLinkWindow,
  };
};
