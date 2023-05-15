import LinkAddModal from "../../modals/link-add/link-add.modal";
import GroupAddModal from "../../modals/group-add/group-add.modal";
import TopicsAddModal from "../../modals/topics-add/topics-add.modal";
import SendModal from "../../modals/send/send.modal";
import InviteModal from "../../modals/invite/invite.modal";

import { ModalsSectionStyle } from "./modals.style";

const ModalsSection = () => {
  return (
    <ModalsSectionStyle>
      <LinkAddModal />
      <GroupAddModal />
      <TopicsAddModal />
      <SendModal />
      <InviteModal />
    </ModalsSectionStyle>
  );
};

export default ModalsSection;
