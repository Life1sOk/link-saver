import { useState } from "react";
import { icons } from "../../utils/react-icons";

import { useGenericLocal } from "../../utils/helper-dispatch/useGenericLocal";
import { useLinkLogic } from "../../utils/contollers/useLinkLogic";

import { IShortLink } from "../../utils/interfaces/link";

import DragWrapper from "../../utils/drag-drop/drag.wrapper";
import LinkUpModal from "./link-up/link-up.modal";
import Link from "../../shared/link/link.shared";
import FrontBlocker from "../../shared/front-blocker/front-blocker.shared";
import DragMarker from "../../shared/drag-marker/drag-marker.shared";

import {
  ModalWrapper,
  FrontDesk,
  DotsLinkStyle,
  IconWrapper,
  UpAction,
  OpenWindow,
} from "./linker.style";

interface ILinker {
  data: IShortLink;
  position: { group_id: number; group_index: number } | "generics";
  isActive: boolean;
  linkTransitionHandler: (arg: IShortLink) => void;
  deleteLink: (data: IShortLink) => void;
  isDraggable?: boolean;
  isOptions?: boolean;
  isStatus?: boolean;
}

const Linker = ({
  data,
  isActive,
  position,
  linkTransitionHandler,
  deleteLink,
  isOptions = true,
  isDraggable = true,
  isStatus = true,
}: ILinker) => {
  const [isOpen, setIsOpen] = useState(false);

  const { editLinkWindow } = useGenericLocal();
  const { updateStatusLink } = useLinkLogic();

  const changeStatusHandler = async () => {
    if (isStatus) {
      const newStatus = {
        id: data.id,
        status: !data.status,
      };
      const oldStatus = {
        id: data.id,
        status: data.status,
      };

      await updateStatusLink(
        position === "generics" ? position : position.group_index,
        newStatus,
        oldStatus
      );
    }
  };

  const openHandler = () => setIsOpen(true);
  const closeHandler = () => setIsOpen(false);

  const editHandler = () => {
    editLinkWindow({
      data,
      from: position === "generics" ? position : position.group_index,
    });
    closeHandler();
  };

  const deleteLinkHandler = async () => {
    if (data.id) {
      // Close window
      closeHandler();
      // Local changes
      deleteLink(data);
    }
  };

  const arrowAction = () => {
    if (linkTransitionHandler) linkTransitionHandler(data);
  };

  return (
    <DragWrapper data={data} from={position} type="link" isDraggable={isDraggable}>
      <ModalWrapper status={data.status}>
        <FrontBlocker isBlocked={data.id > 1683451657031} />
        <FrontDesk isGroupActive={isActive} onClick={arrowAction} />
        <DotsLinkStyle>
          {isDraggable ? <DragMarker /> : null}
          <IconWrapper status={data.status} onClick={changeStatusHandler}>
            {icons.link}
          </IconWrapper>
          <Link data={data} />
          {isOptions ? (
            <IconWrapper onClick={openHandler}>{icons.dots}</IconWrapper>
          ) : null}
        </DotsLinkStyle>
        <LinkUpModal isOpen={isOpen} closeModel={closeHandler}>
          <OpenWindow>
            <UpAction onClick={editHandler}>Edit link</UpAction>
            <UpAction onClick={deleteLinkHandler}>Remove link</UpAction>
          </OpenWindow>
        </LinkUpModal>
      </ModalWrapper>
    </DragWrapper>
  );
};

export default Linker;
