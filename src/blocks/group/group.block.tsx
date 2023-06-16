import { useState, memo, useId } from "react";

import { useLinkLogic } from "../../utils/contollers/useLinkLogic";

import { useAppSelector } from "../../App/store/hooks";
import { useGroupLocal } from "../../utils/helper-dispatch/useGroupLocal";
import { useGenericLocal } from "../../utils/helper-dispatch/useGenericLocal";
import { useBoxLocal } from "../../utils/helper-dispatch/useBoxLocal";
import { useDragLocal } from "../../utils/helper-dispatch/useDragLocal";

import { icons } from "../../utils/react-icons";
import { IGroupGet } from "../../utils/interfaces/group";
import { IShortLink } from "../../utils/interfaces/link";
import { ITopic } from "../../utils/interfaces/topic";

import Linker from "../../components/linker/linker.component";
import GroupTitle from "./group-title/group-title.component";
import GroupActive from "./group-active/group-active.component";
import GroupAction from "./group-action/group-action.component";
import Status from "./group-status/status.component";
import FrontBlocker from "../../shared/front-blocker/front-blocker.shared";
import Blank from "../../components/blank/blank-section.modal";
import DropWrapper from "../../utils/drag-drop/drop.wrapper";

import AreYouSureModal from "../../modals/areYouSure/are-you-sure.modal";
import BlackWindowModal from "../../shared/black-window/black-window.modal";
import GroupTransitionModal from "../../modals/group-transition/group-transition.modal";
import {
  GroupStyle,
  GroupHeader,
  LinksPlace,
  ActionsLine,
  GroupHeaderTop,
  CenterBlack,
} from "./group.style";

interface IGroupBlock {
  index: number;
  data: IGroupGet;
  gridRow?: string;
  deleteGroupHandler: (group_id: number, data: IGroupGet) => void;
  deleteLinkHandler: (data: IShortLink, index: number) => void;
  transitionLink: (data: IShortLink, index: number) => void;
  transitionGroup: (topic: { id: number; topic_title: string }, group: IGroupGet) => void;
}

const GroupBlock = memo(
  ({
    data,
    index,
    gridRow,
    deleteGroupHandler,
    deleteLinkHandler,
    transitionLink,
    transitionGroup,
  }: IGroupBlock) => {
    const { id, group_title, links } = data;

    const uniqueId = useId();
    const [isSureModal, setIsSureModal] = useState(false);

    const { isActive: isActiveWindow, id: activeId } = useAppSelector(
      (state) => state.groupsLocal.window.activeGroup
    );
    const dragData = useAppSelector((state) => state.drag.current);

    let isActive = id === activeId;

    const { linkTransitionToGroup, linkTransitionFromGroupToGroup } = useLinkLogic();

    const { toggleSendGroupWindow, addPrepareLocal } = useBoxLocal();
    const { addOneFromGroupLocal, toggleLinkWindow } = useGenericLocal();
    const { removeDraggableLocal } = useDragLocal();
    const { resetGroupWindow } = useGroupLocal();

    const modalActionHandler = () => {
      resetGroupWindow();
      setIsSureModal(!isSureModal);
    };

    const sureDeleteHandler = () => {
      setIsSureModal(!isSureModal);
      resetGroupWindow();
      deleteGroupHandler(id, data);
    };

    // Add link from group
    const addLinkFromGroupHandler = () => {
      resetGroupWindow();
      // open link window
      toggleLinkWindow();
      // group info
      addOneFromGroupLocal({ index, group_id: id });
    };

    // ======== Transitions
    // link
    const transitionToGenerics = async (data: IShortLink) => transitionLink(data, index);
    // Group
    const transitionToTopicHandler = async (topic: ITopic) =>
      transitionGroup(topic, data);

    // Local delete link handler
    const deleteLinkLocalHandler = async (data: IShortLink) => {
      deleteLinkHandler(data, index);
    };

    // Drop action
    const dropIntoGroupHandler = async () => {
      const { type, data: link_data, from } = dragData;

      // From generics
      if (type === "link" && link_data && from === "generics") {
        const prepData = {
          data: link_data,
          group_index: index,
          group_id: data.id,
        };

        await linkTransitionToGroup(prepData);
      }

      // From group
      if (
        type === "link" &&
        link_data &&
        from !== "generics" &&
        from?.group_id !== data.id
      ) {
        const prepObj = {
          data: link_data,
          group_id: data.id,
          new_group_index: index,
          old_group_index: from?.group_index!,
        };

        await linkTransitionFromGroupToGroup(prepObj);
      }

      removeDraggableLocal();
    };

    // Send to another user;
    const openSendWindowHandler = () => {
      if (links.length === 0) return alert("it doesn't make sense - 0 links");
      if (links.length < 2) return alert("U should have 2 or more links");

      resetGroupWindow();

      toggleSendGroupWindow();
      // Add into prepare local
      addPrepareLocal(data);
    };

    return (
      <>
        <BlackWindowModal isOpen={isActiveWindow} activeHandler={resetGroupWindow} />
        <GroupStyle isActive={id === activeId} gridRow={gridRow}>
          <Status />
          <FrontBlocker isBlocked={id > 1683451657031} />
          <GroupHeader>
            <GroupHeaderTop>
              <GroupActive
                title={group_title}
                group_id={id}
                isActive={isActive}
                group_index={index}
              />
              <GroupTitle title={group_title} group_id={id} isActive={isActive} />
            </GroupHeaderTop>
            <ActionsLine>
              <GroupAction
                title="add"
                icon={icons.link}
                actionHandler={addLinkFromGroupHandler}
              />
              <GroupAction
                title="send"
                icon={icons.send}
                actionHandler={openSendWindowHandler}
              />
              <GroupTransitionModal action={transitionToTopicHandler}>
                <GroupAction
                  title="topic"
                  icon={icons.transition}
                  actionHandler={resetGroupWindow}
                />
              </GroupTransitionModal>
              <GroupAction
                title="delete"
                icon={icons.delete}
                actionHandler={modalActionHandler}
              />
            </ActionsLine>
          </GroupHeader>
          <DropWrapper typeFor="link" actionHandler={dropIntoGroupHandler}>
            {links.length < 1 ? (
              <CenterBlack>
                <Blank title="links" icon={icons.link} />
              </CenterBlack>
            ) : (
              <LinksPlace>
                {links?.map((link, index) => (
                  <Linker
                    data={link}
                    key={uniqueId + index}
                    isActive={isActive}
                    position={{ group_id: data.id, group_index: index }}
                    deleteLink={deleteLinkLocalHandler}
                    linkTransitionHandler={transitionToGenerics}
                  />
                ))}
              </LinksPlace>
            )}
          </DropWrapper>
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
