import { useState, memo } from "react";

import { useAppSelector } from "../../App/store/hooks";

import { useGroupLocal } from "../../utils/hooks/useGroupLocal";

import { icons } from "../../utils/react-icons";
import { IGroupGet } from "../../interfaces/group";
import { IShortLink } from "../../interfaces/link";

import Linker from "../../components/linker/linker.component";
import GroupTitle from "../../components/group-title/group-title.component";
import GroupActive from "../../components/group-active/group-active.component";
import FrontBlocker from "../../shared/front-blocker/front-blocker.shared";

import AreYouSureModal from "../../modals/areYouSure/are-you-sure.modal";
import BlackWindowModal from "../../modals/black-window/black-window.modal";
import { GroupStyle, GroupHeader, IconWrapper, LinksPlace } from "./group.style";

interface IGroupBlock {
  index: number;
  data: IGroupGet;
  deleteGroupHandler: (group_id: number, data: IGroupGet) => void;
  deleteLinkHandler: (data: IShortLink, index: number, link_id: number) => void;
  transitionLink: (data: IShortLink, index: number) => void;
}

const GroupBlock = memo(
  ({
    data,
    index,
    deleteGroupHandler,
    deleteLinkHandler,
    transitionLink,
  }: IGroupBlock) => {
    const { id, group_title, links } = data;

    const [isSureModal, setIsSureModal] = useState(false);

    const { isActive: isActiveWindow, id: activeId } = useAppSelector(
      (state) => state.groupsLocal.window.activeGroup
    );

    let isActive = id === activeId;

    const { resetGroupWindow } = useGroupLocal();

    const modalActionHandler = () => setIsSureModal(!isSureModal);

    const sureDeleteHandler = () => {
      setIsSureModal(!isSureModal);
      deleteGroupHandler(id, data);
    };

    // Need local changes
    const transitionToGenerics = async (data: IShortLink) => transitionLink(data, index);

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
      deleteLinkHandler(data, index, link_id);
    };

    return (
      <>
        <BlackWindowModal
          isOpen={isActiveWindow}
          activeHandler={closeActiveWindowHandler}
        />
        <GroupStyle isActive={isActive}>
          <FrontBlocker isBlocked={id > 1683451657031} />
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
              <Linker
                data={link}
                key={link.id}
                isActive={isActive}
                position={`${index}`}
                deleteLink={deleteLinkLocalHandler}
                linkTransitionHandler={transitionToGenerics}
              />
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
