import BlackWindowModal from "../../shared/black-window/black-window.modal";

import { SendStyle } from "./send.style";

const ShareModal = () => {
  return (
    <BlackWindowModal isOpen={false} activeHandler={() => {}}>
      <SendStyle onClick={(e) => e.stopPropagation()} />
    </BlackWindowModal>
  );
};

export default ShareModal;
