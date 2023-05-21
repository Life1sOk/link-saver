import { useAppSelector } from "../../App/store/hooks";
import { useReceivingBoxLocal } from "../../utils/helper-dispatch/useReceivingBoxLocal";

import BlackWindowModal from "../../shared/black-window/black-window.modal";

import { GroupSendModalStyle } from "./group-send.style";

const GroupSendModal = () => {
  const isOpen = useAppSelector((state) => state.receivingBox.isSendWindow);
  const { toggleSendGroupWindow } = useReceivingBoxLocal();

  return (
    <BlackWindowModal isOpen={isOpen} activeHandler={toggleSendGroupWindow}>
      <GroupSendModalStyle></GroupSendModalStyle>
    </BlackWindowModal>
  );
};

export default GroupSendModal;
