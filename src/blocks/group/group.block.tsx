import { useState, memo, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../App/store/hooks";
import {
  removeCurrentLink,
  updateGroupLinks,
  deleteGroup,
} from "../../App/store/slices/groups.slice";
import { addOneGeneric } from "../../App/store/slices/generics.slice";
import { deactivateGroup } from "../../App/store/slices/action-window.slice";
import { processStatusHandlerStore } from "../../App/store/slices/process.slice";

import {
  useChangeLinkGroupTitleMutation,
  useGetGenericLinksByUserIdQuery,
  useLazyGetGroupsLinksByIdQuery,
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
import {
  GroupStyle,
  GroupHeader,
  IconWrapper,
  LinksPlace,
} from "./group.style";

const GroupBlock = memo(
  ({ data, index }: { data: IGroupGet; index: number }) => {
    const { id, group_title, links } = data;
    const dispatch = useAppDispatch();

    const [isSureModal, setIsSureModal] = useState(false);

    const userId = useAppSelector((state) => state.user.session.user_id);

    const { isActive: isActiveWindow, id: activeId } = useAppSelector(
      (state) => state.actionWindow.activeGroup
    );

    let isActive = id === activeId;

    const { refetch: refetchGenericLinks } =
      useGetGenericLinksByUserIdQuery(userId);
    const [fetchUpGroupLinks] = useLazyGetGroupsLinksByIdQuery();

    const [changeGroupLinkApi, { isError, isLoading, isSuccess }] =
      useChangeLinkGroupTitleMutation();
    const [deleteGroupApi] = useDeleteGroupMutation();

    const modalActionHandler = () => setIsSureModal(!isSureModal);

    const sureDeleteHandler = async () => {
      setIsSureModal(!isSureModal);
      // local
      dispatch(deleteGroup(id));

      return await deleteGroupApi({
        id,
        user_id: userId,
      });
    };

    // Need local changes
    const changeGroupLinkHandler = async (data: IShortLink) => {
      // Local change - removee from group
      dispatch(removeCurrentLink({ link_id: data.id, index }));
      // Local change - add to generics
      dispatch(addOneGeneric(data));
      // // Server change
      await changeGroupLinkApi({ id: data.id, group_id: null });
    };

    const closeActiveWindowHandler = async () => {
      // Close window
      dispatch(deactivateGroup());

      // Refetch control generics
      // await refetchGenericLinks();

      // Refetch control groups
      // await fetchUpGroupLinks({
      //   user_id: userId,
      //   group_id: id,
      // }).then((response) =>
      //   dispatch(updateGroupLinks({ index, links: response.data }))
      // );
    };

    // Local delete link handler
    const deleteLinkLocalHandler = (link_id: number) =>
      dispatch(removeCurrentLink({ link_id, index }));

    useEffect(() => {
      const processStatusHandler = (status: string) =>
        dispatch(processStatusHandlerStore(status));

      if (isLoading) processStatusHandler("isLoading");
      if (isSuccess) processStatusHandler("isSuccess");
      if (isError) processStatusHandler("isError");
    }, [isError, isLoading, isSuccess, dispatch]);

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
            <IconWrapper onClick={modalActionHandler}>
              {icons.delete}
            </IconWrapper>
          </GroupHeader>
          <LinksPlace>
            {links?.map((link) => (
              <DotsLinkModal
                data={link}
                key={link.id}
                isActive={isActive}
                position={`${index}`}
                deleteLinkLocal={deleteLinkLocalHandler}
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
  }
);

export default GroupBlock;
