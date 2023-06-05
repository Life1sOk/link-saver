import { useState } from "react";
import { icons } from "../../utils/react-icons";

import { useGenericLocal } from "../../utils/helper-dispatch/useGenericLocal";
import { useLinkLogic } from "../../utils/contollers/useLinkLogic";

import { IShortLink } from "../../utils/interfaces/link";

import DragDrop from "../../utils/drag-drop/drag.wrapper";
import LinkUpModal from "./link-up/link-up.modal";
import Link from "../../shared/link/link.shared";
import FrontBlocker from "../../shared/front-blocker/front-blocker.shared";

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
  position: string;
  isActive: boolean;
  linkTransitionHandler: (arg: IShortLink) => void;
  deleteLink: (data: IShortLink) => void;
}

const Linker = ({
  data,
  isActive,
  position,
  linkTransitionHandler,
  deleteLink,
}: ILinker) => {
  const [isOpen, setIsOpen] = useState(false);

  const { editLinkWindow } = useGenericLocal();

  const { updateStatusLink } = useLinkLogic();

  const changeStatusHandler = async () => {
    const newStatus = {
      id: data.id,
      status: !data.status,
    };
    const oldStatus = {
      id: data.id,
      status: data.status,
    };

    await updateStatusLink(position, newStatus, oldStatus);
  };

  const openHandler = () => setIsOpen(true);
  const closeHandler = () => setIsOpen(false);

  const editHandler = () => {
    editLinkWindow({ data, from: position });
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
    <DragDrop link_id={data.id}>
      <ModalWrapper>
        <FrontBlocker isBlocked={data.id > 1683451657031} />
        <FrontDesk isGroupActive={isActive} onClick={arrowAction} />
        <DotsLinkStyle>
          <IconWrapper status={Number(data.status)} onClick={changeStatusHandler}>
            {icons.link}
          </IconWrapper>
          <Link data={data} />
          <IconWrapper onClick={openHandler}>{icons.dots}</IconWrapper>
        </DotsLinkStyle>
        <LinkUpModal isOpen={isOpen} closeModel={closeHandler}>
          <OpenWindow>
            <UpAction onClick={editHandler}>Edit link</UpAction>
            <UpAction onClick={deleteLinkHandler}>Remove link</UpAction>
          </OpenWindow>
        </LinkUpModal>
      </ModalWrapper>
    </DragDrop>
  );
};

export default Linker;
