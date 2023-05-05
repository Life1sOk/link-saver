import { useAppDispatch } from "../App/store/hooks";

import {
  localGenericsStore,
  addOneGeneric,
  updateOneStatusGeneric,
  updateOneGeneric,
  deleteOneGeneric,
} from "../App/store/slices/generics.slice";

import { IShortLink } from "../interfaces/link";

export const useGenericLocal = () => {
  const dispatch = useAppDispatch();

  const addAllGenericsLocal = (arg: IShortLink[]) => dispatch(localGenericsStore(arg));
  const addOneGenericLocal = (arg: IShortLink) => dispatch(addOneGeneric(arg));

  const updateOneGenericLocal = (arg: IShortLink) => dispatch(updateOneGeneric(arg));
  const updateOneStatusGenericLocal = (arg: { id: number; status: boolean }) =>
    dispatch(updateOneStatusGeneric(arg));

  const deleteOneGenericLocal = (arg: number) => dispatch(deleteOneGeneric(arg));

  return {
    addAllGenericsLocal,
    addOneGenericLocal,
    updateOneGenericLocal,
    updateOneStatusGenericLocal,
    deleteOneGenericLocal,
  };
};
