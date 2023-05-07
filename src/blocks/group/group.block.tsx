import { useState, memo } from "react";

import { useAppSelector } from "../../App/store/hooks";

import { useGenericLocal } from "../../utils/hooks/useGenericLocal";
import { useGroupLocal } from "../../utils/hooks/useGroupLocal";
import { useRequestProcess } from "../../utils/hooks/useRequestProcess";

import {
  useChangeLinkGroupTitleMutation,
  useDeleteLinkSnapshotMutation,
} from "../../App/store/api/links";
import { useDeleteGroupMutation } from "../../App/store/api/groups";

import { icons } from "../../utils/react-icons";
import { IGroupGet } from "../../interfaces/group";
import { IShortLink } from "../../interfaces/link";

import Link from "../../components/link/link.component";
import GroupTitle from "../../components/group-title/group-title.component";
import GroupActive from "../../components/group-active/group-active.component";

import AreYouSureModal from "../../modals/areYouSure/are-you-sure.modal";
import DotsLinkModal from "../../modals/dots-link/dots-link.modal";
import BlackWindowModal from "../../modals/black-window/black-window.modal";
import { GroupStyle, GroupHeader, IconWrapper, LinksPlace } from "./group.style";

const GroupBlock = memo(({ data, index }: { data: IGroupGet; index: number }) => {
  const { id, group_title, links } = data;

  const [isSureModal, setIsSureModal] = useState(false);

  const userId = useAppSelector((state) => state.user.session.user_id);

  const { isActive: isActiveWindow, id: activeId } = useAppSelector(
    (state) => state.groupsLocal.window.activeGroup
  );

  let isActive = id === activeId;

  const { addOneGenericLocal, deleteOneGenericLocal } = useGenericLocal();
  const { deleteGroupLocal, addGroupLinkLocal, deleteGroupLinkLocal, resetGroupWindow } =
    useGroupLocal();

  const [changeGroupLinkApi, changeGroupLinkApiResult] =
    useChangeLinkGroupTitleMutation();
  // Handler status
  useRequestProcess(changeGroupLinkApiResult);

  const [deleteSnapshotApi] = useDeleteLinkSnapshotMutation();
  const [deleteGroupApi] = useDeleteGroupMutation();

  const modalActionHandler = () => setIsSureModal(!isSureModal);

  const sureDeleteHandler = async () => {
    setIsSureModal(!isSureModal);
    // local
    deleteGroupLocal(id);

    await deleteGroupApi({
      id,
      user_id: userId,
    });
  };

  // Need local changes
  const transitionToGenerics = async (data: IShortLink) => {
    // Local change - removee from group
    deleteGroupLinkLocal({ link_id: data.id, index });
    // Local change - add to generics
    addOneGenericLocal(data);
    // // Server change
    await changeGroupLinkApi({ id: data.id, group_id: null })
      .unwrap()
      .catch((err) => {
        if (err) {
          deleteOneGenericLocal(data.id);
          addGroupLinkLocal({ link_data: data, index });
        }
      });
  };

  // Close window
  const closeActiveWindowHandler = () => resetGroupWindow();

  // Local delete link handler
  const deleteLinkLocalHandler = async ({
    link_id,
    data,
  }: {
    link_id: number;
    data: IShortLink;
  }) => {
    // Local
    deleteGroupLinkLocal({ link_id, index });
    // Server
    await deleteSnapshotApi({ id: link_id })
      .unwrap()
      .catch((err) => {
        // Back changes
        if (err) {
          addGroupLinkLocal({ link_data: data, index });
        }
      });
  };

  return (
    <>
      <BlackWindowModal
        isOpen={isActiveWindow}
        activeHandler={closeActiveWindowHandler}
      />
      <GroupStyle isActive={isActive}>
        <GroupHeader>
          <GroupActive
            title={group_title}
            group_id={id}
            isActive={isActive}
            group_index={index}
          />
          <GroupTitle title={group_title} group_id={id} isActive={isActive} />
          <IconWrapper onClick={modalActionHandler}>{icons.delete}</IconWrapper>
        </GroupHeader>
        <LinksPlace>
          {links?.map((link) => (
            <DotsLinkModal
              data={link}
              key={link.id}
              isActive={isActive}
              position={`${index}`}
              deleteLink={deleteLinkLocalHandler}
              linkTransitionHandler={transitionToGenerics}
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
