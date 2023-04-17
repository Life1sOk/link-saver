import { useState } from "react";

import { useAppSelector } from "../../App/store/hooks";

import {
  useGetGroupsLinksByTitleQuery,
  useChangeLinkGroupTitleMutation,
} from "../../App/store/api/links";
import { useDeleteGroupMutation } from "../../App/store/api/groups";

import { icons } from "../../utils/react-icons";

import Link from "../../components/link/link.component";
import GroupTitle from "../../components/group-title/group-title.component";
import GroupActive from "../../components/group-active/group-active.component";

import AreYouSureModal from "../../modals/areYouSure/are-you-sure.modal";
import DotsLinkModal from "../../modals/dots-link/dots-link.modal";
import {
  GroupStyle,
  GroupHeader,
  IconWrapper,
  LinksPlace,
} from "./group.style";

const GroupBlock = ({ title, groupId }: { title: string; groupId: number }) => {
  const [isSureModal, setIsSureModal] = useState(false);

  const userId = useAppSelector((state) => state.user.data.id);

  const currentActiveGroup = useAppSelector(
    (state) => state.actionWindow.activeGroup
  );

  const { data } = useGetGroupsLinksByTitleQuery({
    user_id: userId,
    group_id: groupId,
  });
  const [changeGroupLinkApi] = useChangeLinkGroupTitleMutation();
  const [deleteGroupApi] = useDeleteGroupMutation();

  const modalActionHandler = () => setIsSureModal(!isSureModal);

  const sureDeleteHandler = async () => {
    await deleteGroupApi({
      id: groupId,
      user_id: userId,
    });

    return setIsSureModal(!isSureModal);
  };

  const changeGroupLinkHandler = async (link_id: number) =>
    await changeGroupLinkApi({ id: link_id, group_id: null });

  let isActive = groupId === currentActiveGroup.id;

  return (
    <GroupStyle isActive={isActive}>
      <GroupHeader>
        <GroupActive title={title} group_id={groupId} isActive={isActive} />
        <GroupTitle title={title} group_id={groupId} isActive={isActive} />
        <IconWrapper onClick={modalActionHandler}>{icons.delete}</IconWrapper>
      </GroupHeader>
      <LinksPlace>
        {data?.map((link) => (
          <DotsLinkModal data={link} key={link.id}>
            <Link
              data={link}
              key={link.id}
              isActive={isActive}
              arrowActionHandler={changeGroupLinkHandler}
            />
          </DotsLinkModal>
        ))}
      </LinksPlace>
      <AreYouSureModal
        isActive={isSureModal}
        actionSureHandler={sureDeleteHandler}
        actionToggleHandler={modalActionHandler}
        message="All your links in this group will be also deleted! Are you sure?"
      />
    </GroupStyle>
  );
};

export default GroupBlock;
