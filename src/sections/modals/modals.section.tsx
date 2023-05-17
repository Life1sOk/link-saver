import LinkAddModal from "../../modals/link-add/link-add.modal";
import GroupAddModal from "../../modals/group-add/group-add.modal";
import TopicsAddModal from "../../modals/topics-add/topics-add.modal";
import SendModal from "../../modals/send/send.modal";
import FriednsModal from "../../modals/friends/friends.modal";

import { ModalsSectionStyle } from "./modals.style";

const ModalsSection = () => {
  return (
    <ModalsSectionStyle>
      <LinkAddModal />
      <GroupAddModal />
      <TopicsAddModal />
      <SendModal />
      <FriednsModal />
    </ModalsSectionStyle>
  );
};

export default ModalsSection;
