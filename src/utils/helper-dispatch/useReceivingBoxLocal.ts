import { useAppDispatch } from "../../App/store/hooks";

import {
  toggleReceivingWindow,
  toggleSendWindow,
} from "../../App/store/slices/receivingBox.slice";

export const useReceivingBoxLocal = () => {
  const dispatch = useAppDispatch();

  // Toggle
  const toggleReceivingBoxWindow = () => dispatch(toggleReceivingWindow());
  const toggleSendGroupWindow = () => dispatch(toggleSendWindow());

  return { toggleReceivingBoxWindow, toggleSendGroupWindow };
};
