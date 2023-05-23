import { useAppDispatch } from "../../App/store/hooks";

import { IGroupGet } from "../interfaces/group";

import { ITransRece } from "../interfaces/transition";

import {
  toggleReceivingWindow,
  toggleSendWindow,
  addToPrepare,
  pickSendFor,
  addToReceivingAll,
  addToReceiving,
  removeReceivingBox,
} from "../../App/store/slices/box.slice";

export const useBoxLocal = () => {
  const dispatch = useAppDispatch();

  // CRUD
  const addPrepareLocal = (arg: IGroupGet) => dispatch(addToPrepare(arg));
  const addSendForLocal = (arg: number) => dispatch(pickSendFor(arg));
  const addToReceivingAllLocal = (arg: ITransRece[]) => dispatch(addToReceivingAll(arg));
  const addReceivingLocal = (arg: ITransRece) => dispatch(addToReceiving(arg));
  const removeReceivingLocal = (arg: number) => dispatch(removeReceivingBox(arg));

  // Toggle
  const toggleReceivingBoxWindow = () => dispatch(toggleReceivingWindow());
  const toggleSendGroupWindow = () => dispatch(toggleSendWindow());

  return {
    toggleReceivingBoxWindow,
    toggleSendGroupWindow,
    addPrepareLocal,
    addSendForLocal,
    addToReceivingAllLocal,
    addReceivingLocal,
    removeReceivingLocal,
  };
};
