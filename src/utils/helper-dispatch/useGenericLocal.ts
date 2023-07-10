import { useAppDispatch } from "../../App/store/hooks";

import {
  localGenericsStore,
  addOneGeneric,
  addOneFromGroup,
  updateOneStatusGeneric,
  updateOneGenericId,
  updateOneGeneric,
  deleteOneGeneric,
  // Window
  toggleLinkWindowHandler,
  activateLink,
} from "../../App/store/slices/generics.slice";

import { IShortLink } from "../interfaces/link";
import { IGroupAdd } from "../interfaces/group";

interface IUpId {
  oldId: number;
  newId: void;
}

interface IEditLink {
  data: IShortLink;
  from: "generics" | IGroupAdd;
}

export const useGenericLocal = () => {
  const dispatch = useAppDispatch();

  // CRUD
  const addAllGenericsLocal = (arg: IShortLink[]) => dispatch(localGenericsStore(arg));
  const addOneGenericLocal = (arg: IShortLink) => dispatch(addOneGeneric(arg));
  const addOneFromGroupLocal = (arg: IGroupAdd) => dispatch(addOneFromGroup(arg));

  const updateOneGenericLocal = (arg: IShortLink) => dispatch(updateOneGeneric(arg));
  const updateOneStatusGenericLocal = (arg: { id: number; status: boolean }) =>
    dispatch(updateOneStatusGeneric(arg));
  const updateOneGenericIdLocal = (arg: IUpId) => dispatch(updateOneGenericId(arg));

  const deleteOneGenericLocal = (link_id: number) => dispatch(deleteOneGeneric(link_id));

  // Window
  const toggleLinkWindow = () => dispatch(toggleLinkWindowHandler());
  const editLinkWindow = (arg: IEditLink) => dispatch(activateLink(arg));

  return {
    addAllGenericsLocal,
    addOneGenericLocal,
    addOneFromGroupLocal,
    updateOneGenericLocal,
    updateOneGenericIdLocal,
    updateOneStatusGenericLocal,
    deleteOneGenericLocal,
    // Window
    toggleLinkWindow,
    editLinkWindow,
  };
};
