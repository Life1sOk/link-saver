import { useAppSelector, useAppDispatch } from "../../App/store/hooks";
import { toggleSendWindow } from "../../App/store/slices/friends.slice";

import BlackWindowModal from "../../shared/black-window/black-window.modal";

import { SendStyle } from "./send.style";

const ShareModal = () => {
  const dispatch = useAppDispatch();

  const isWindow = useAppSelector((state) => state.friends.isSendWindow);

  const toggle = () => dispatch(toggleSendWindow());

  return (
    <BlackWindowModal isOpen={isWindow} activeHandler={toggle}>
      <SendStyle onClick={(e) => e.stopPropagation()} />
    </BlackWindowModal>
  );
};

export default ShareModal;
