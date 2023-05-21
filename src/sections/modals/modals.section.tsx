import LinkAddModal from "../../modals/link-add/link-add.modal";
import GroupAddModal from "../../modals/group-add/group-add.modal";
import TopicsAddModal from "../../modals/topics-add/topics-add.modal";
import SendModal from "../../modals/receiving/receiving.modal";
import ReceivingModal from "../../modals/friends/friends.modal";
import GroupSendModal from "../../modals/group-send/group-send.modal";

import { ModalsSectionStyle } from "./modals.style";

const ModalsSection = () => {
  return (
    <ModalsSectionStyle>
      <LinkAddModal />
      <GroupAddModal />
      <TopicsAddModal />
      <SendModal />
      <ReceivingModal />
      <GroupSendModal />
    </ModalsSectionStyle>
  );
};

export default ModalsSection;
