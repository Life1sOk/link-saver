import { useState, useEffect, memo } from "react";

import { useAppSelector, useAppDispatch } from "../../App/store/hooks";
import { updateGroupLinks } from "../../App/store/slices/groups.slice";
import { deactivateGroup } from "../../App/store/slices/action-window.slice";

import {
  useGetGroupsLinksByIdQuery,
  useChangeLinkGroupTitleMutation,
} from "../../App/store/api/links";
import { useDeleteGroupMutation } from "../../App/store/api/groups";

import { icons } from "../../utils/react-icons";
import { IGroupGet } from "../../interfaces/group";

import Link from "../../components/link/link.component";
import GroupTitle from "../../components/group-title/group-title.component";
import GroupActive from "../../components/group-active/group-active.component";

import AreYouSureModal from "../../modals/areYouSure/are-you-sure.modal";
import DotsLinkModal from "../../modals/dots-link/dots-link.modal";
import BlackWindowModal from "../../modals/black-window/black-window.modal";
import {
  GroupStyle,
  GroupHeader,
  IconWrapper,
  LinksPlace,
} from "./group.style";

const GroupBlock = memo(({ data }: { data: IGroupGet }) => {
  const { id, group_title, links } = data;
  const dispatch = useAppDispatch();

  const [isSureModal, setIsSureModal] = useState(false);

  const userId = useAppSelector((state) => state.user.session.user_id);

  const currentActiveGroup = useAppSelector(
    (state) => state.actionWindow.activeGroup
  );

  const { data: groupLinks } = useGetGroupsLinksByIdQuery({
    user_id: userId,
    group_id: id,
  });

  const [changeGroupLinkApi] = useChangeLinkGroupTitleMutation();
  const [deleteGroupApi] = useDeleteGroupMutation();

  const modalActionHandler = () => setIsSureModal(!isSureModal);

  const sureDeleteHandler = async () => {
    setIsSureModal(!isSureModal);

    return await deleteGroupApi({
      id,
      user_id: userId,
    });
  };

  // Need local changes
  const changeGroupLinkHandler = async (link_id: number) =>
    await changeGroupLinkApi({ id: link_id, group_id: null });

  let isActive = id === currentActiveGroup.id;

  useEffect(() => {
    if (links?.length !== groupLinks?.length) {
      dispatch(updateGroupLinks({ group_id: id, links: groupLinks }));
    }
  }, [links, groupLinks, dispatch, id]);

  return (
    <>
      <BlackWindowModal
        isOpen={currentActiveGroup.isActive}
        activeHandler={() => dispatch(deactivateGroup())}
      />
      <GroupStyle isActive={isActive}>
        <GroupHeader>
          <GroupActive title={group_title} group_id={id} isActive={isActive} />
          <GroupTitle title={group_title} group_id={id} isActive={isActive} />
          <IconWrapper onClick={modalActionHandler}>{icons.delete}</IconWrapper>
        </GroupHeader>
        <LinksPlace>
          {links?.map((link) => (
            <DotsLinkModal
              data={link}
              key={link.id}
              isActive={isActive}
              arrowActionHandler={changeGroupLinkHandler}
            >
              <Link data={link} key={link.id} />
            </DotsLinkModal>
          ))}
        </LinksPlace>
      </GroupStyle>
      <AreYouSureModal
        isActive={isSureModal}
        actionSureHandler={sureDeleteHandler}
        actionToggleHandler={modalActionHandler}
        message="All your links in this group will be also deleted! Are you sure?"
      />
    </>
  );
});

export default GroupBlock;
