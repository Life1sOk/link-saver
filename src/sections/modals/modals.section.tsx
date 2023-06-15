import SendModal from "../../modals/receiving/receiving.modal";
import ReceivingModal from "../../modals/friends/friends.modal";
import GroupSendModal from "../../modals/group-send/group-send.modal";
import ProfileModal from "../../modals/profile/profile.modal";
import ReportModal from "../../modals/report/report.modal";
import MessageModal from "../../modals/message/message.modal";

import LinkAddModal from "../../modals/add-modals/links-add.modal";
import GroupAddModal from "../../modals/add-modals/groups-add.modal";
import TopicsAddModal from "../../modals/add-modals/topics-add.modal";

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
      <ProfileModal />
      <ReportModal />
      <MessageModal />
    </ModalsSectionStyle>
  );
};

export default ModalsSection;
