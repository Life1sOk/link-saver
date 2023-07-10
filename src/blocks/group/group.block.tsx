import { useState, memo, useId, useEffect } from "react";

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
  group_index: number;
  data: IGroupGet;
  gridRow?: string;
  deleteGroupHandler: (group_id: number, data: IGroupGet) => void;
  deleteLinkHandler: (data: IShortLink, index: number) => void;
  transitionLink: (data: IShortLink, index: number) => void;
  transitionGroup: (topic: { id: number; topic_title: string }, group: IGroupGet) => void;
  isOptions?: boolean;
  isActivate?: boolean;
}

const GroupBlock = memo(
  ({
    data,
    group_index,
    gridRow,
    deleteGroupHandler,
    deleteLinkHandler,
    transitionLink,
    transitionGroup,
    isOptions = true,
    isActivate = true,
  }: IGroupBlock) => {
    const { id, group_title, links } = data;

    const uniqueId = useId();
    const [isSureModal, setIsSureModal] = useState(false);
    const [upLinks, setUpLinks] = useState(links);

    const { isActive: isActiveWindow, id: activeId } = useAppSelector(
      (state) => state.groupsLocal.window.activeGroup
    );
    const dragData = useAppSelector((state: any) => state.drag.current);

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
      addOneFromGroupLocal({ group_index, group_id: id });
    };

    // ======== Transitions
    // link
    const transitionToGenerics = async (data: IShortLink) =>
      transitionLink(data, group_index);
    // Group
    const transitionToTopicHandler = async (topic: ITopic) =>
      transitionGroup(topic, data);

    // Local delete link handler
    const deleteLinkLocalHandler = async (data: IShortLink) => {
      deleteLinkHandler(data, group_index);
    };

    // Drop action
    const dropIntoGroupHandler = async () => {
      const { type, data: link_data, from } = dragData;

      // From generics
      if (type === "link" && link_data && from === "generics") {
        const prepData = {
          data: link_data,
          group_index,
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
          new_group_index: group_index,
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

    // Filter links
    const filterLinks = (active: "done" | "regular" | "total") => {
      // done, total, regular
      if (active === "done") setUpLinks(links.filter((link) => link.status === true));
      if (active === "regular") setUpLinks(links.filter((link) => link.status !== true));
      if (active === "total") sortLinks();
    };

    // Sort by status
    const sortLinks = () => {
      const copyLinks = [...links];
      copyLinks.sort((a, b) => Number(a.status) - Number(b.status));
      setUpLinks(copyLinks);
    };

    useEffect(() => sortLinks(), [links]);

    return (
      <>
        <BlackWindowModal isOpen={isActiveWindow} activeHandler={resetGroupWindow} />
        <GroupStyle isActive={id === activeId} gridRow={gridRow}>
          <Status array={links} actionHandler={filterLinks} />
          <FrontBlocker isBlocked={id > 1683451657031} />
          <GroupHeader>
            <GroupHeaderTop>
              <GroupActive
                title={group_title}
                group_id={id}
                isActive={isActive}
                group_index={group_index}
                isActivate={isActivate}
              />
              <GroupTitle title={group_title} group_id={id} isActive={isActive} />
            </GroupHeaderTop>
            {isOptions && (
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
            )}
          </GroupHeader>
          <DropWrapper typeFor="link" actionHandler={dropIntoGroupHandler}>
            {upLinks.length < 1 ? (
              <CenterBlack>
                <Blank title="links" icon={icons.link} />
              </CenterBlack>
            ) : (
              <LinksPlace>
                {upLinks?.map((link, index) => (
                  <Linker
                    data={link}
                    key={uniqueId + index}
                    isActive={isActive}
                    position={{ group_id: data.id, group_index }}
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
          message="This group will be moved to the archive and will remain there for 4 days (96 hours)!"
        />
      </>
    );
  }
);

export default GroupBlock;
