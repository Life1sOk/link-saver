import { useAppDispatch } from "../../App/store/hooks";

import { addDraggable, removeDraggable } from "../../App/store/slices/drag.slice";

import { IIntDrag } from "../interfaces/drag";

export const useDragLocal = () => {
  const dispatch = useAppDispatch();

  const addDraggableLocal = (arg: IIntDrag) => dispatch(addDraggable(arg));
  const removeDraggableLocal = () => dispatch(removeDraggable());

  return {
    addDraggableLocal,
    removeDraggableLocal,
  };
};
