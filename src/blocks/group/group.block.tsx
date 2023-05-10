import { useState, memo } from "react";

import { useAppSelector } from "../../App/store/hooks";

import { useGroupLocal } from "../../utils/helper-dispatch/useGroupLocal";
import { useGenericLocal } from "../../utils/helper-dispatch/useGenericLocal";

import { icons } from "../../utils/react-icons";
import { IGroupGet } from "../../utils/interfaces/group";
import { IShortLink } from "../../utils/interfaces/link";

import Linker from "../../components/linker/linker.component";
import GroupTitle from "../../components/group-title/group-title.component";
import GroupActive from "../../components/group-active/group-active.component";
import FrontBlocker from "../../shared/front-blocker/front-blocker.shared";
import OtherButton from "../../shared/other-button/other-button.component";

import AreYouSureModal from "../../modals/areYouSure/are-you-sure.modal";
import BlackWindowModal from "../../modals/black-window/black-window.modal";
import OtherActionModal from "../../modals/other-action/other-action.modal";
import GroupTransitionModal from "../../modals/group-transition/group-transition.modal";
import { GroupStyle, GroupHeader, IconWrapper, LinksPlace } from "./group.style";

interface IGroupBlock {
  index: number;
  data: IGroupGet;
  deleteGroupHandler: (group_id: number, data: IGroupGet) => void;
  deleteLinkHandler: (data: IShortLink, index: number) => void;
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

    const [isModal, setIsModal] = useState(false);
    const [isSureModal, setIsSureModal] = useState(false);

    const { isActive: isActiveWindow, id: activeId } = useAppSelector(
      (state) => state.groupsLocal.window.activeGroup
    );

    let isActive = id === activeId;

    const { addOneFromGroupLocal, toggleLinkWindow } = useGenericLocal();
    const { resetGroupWindow } = useGroupLocal();

    const openModalHandler = () => setIsModal(true);
    const closeModalHandler = () => setIsModal(false);

    const modalActionHandler = () => {
      setIsSureModal(!isSureModal);
      closeModalHandler();
    };

    const sureDeleteHandler = () => {
      setIsSureModal(!isSureModal);
      resetGroupWindow();
      deleteGroupHandler(id, data);
    };

    // Add link from group
    const addLinkFromGroupHandler = () => {
      // Close modal
      closeModalHandler();
      // open link window
      toggleLinkWindow();
      // group info
      addOneFromGroupLocal({ index, group_id: id });
    };

    // Need local changes
    const transitionToGenerics = async (data: IShortLink) => transitionLink(data, index);

    // Local delete link handler
    const deleteLinkLocalHandler = async (data: IShortLink) => {
      deleteLinkHandler(data, index);
    };

    return (
      <>
        <BlackWindowModal isOpen={isActiveWindow} activeHandler={resetGroupWindow} />
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
            <IconWrapper onClick={openModalHandler}>{icons.dots}</IconWrapper>
            <OtherActionModal isOpen={isModal} closeModel={closeModalHandler}>
              <GroupTransitionModal>
                <OtherButton title="Transition" action={() => {}} />
              </GroupTransitionModal>
              <OtherButton title="Add link" action={addLinkFromGroupHandler} />
              <OtherButton title="Delete" action={modalActionHandler} />
            </OtherActionModal>
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
