import { useState } from "react";
import { icons } from "../../utils/react-icons";

import { useGenericLocal } from "../../utils/hooks/useGenericLocal";
import { useGroupLocal } from "../../utils/hooks/useGroupLocal";
import { useRequestProcess } from "../../utils/hooks/useRequestProcess";

import { IShortLink } from "../../interfaces/link";

import { useChangeLinkStatusMutation } from "../../App/store/api/links";

import LinkSettingModal from "../../modals/link-setting/link-setting.modal";
import Link from "../../shared/link/link.shared";
import FrontBlocker from "../../shared/front-blocker/front-blocker.shared";

import { ModalWrapper, FrontDesk, DotsLinkStyle, IconWrapper } from "./linker.style";

interface ILinker {
  data: IShortLink;
  position: string;
  isActive: boolean;
  linkTransitionHandler: (arg: IShortLink) => void;
  deleteLink: ({ link_id, data }: { link_id: number; data: IShortLink }) => void;
}

const Linker = ({
  data,
  isActive,
  position,
  linkTransitionHandler,
  deleteLink,
}: ILinker) => {
  const [isOpen, setIsOpen] = useState(false);

  const { updateOneStatusGenericLocal, editLinkWindow } = useGenericLocal();
  const { updateGroupLinkStatusLocal } = useGroupLocal();

  const [changeLinkStatusApi, changeLinkStatusApiStatus] = useChangeLinkStatusMutation();
  useRequestProcess(changeLinkStatusApiStatus);

  const statusLocalChange = (newStatus: { id: number; status: boolean }) => {
    if (position === "generics") {
      updateOneStatusGenericLocal(newStatus);
    } else {
      updateGroupLinkStatusLocal({
        link_data: newStatus,
        index: Number(position),
      });
    }
  };

  const changeStatusHandler = async () => {
    const newStatus = {
      id: data.id,
      status: !data.status,
    };
    const oldStatus = {
      id: data.id,
      status: data.status,
    };

    // Local changes
    statusLocalChange(newStatus);

    // Server changes
    await changeLinkStatusApi(newStatus)
      .unwrap()
      .catch((err) => {
        // Back changes
        if (err) {
          statusLocalChange(oldStatus);
        }
      });
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
      deleteLink({ link_id: data.id, data });
    }
  };

  const arrowAction = () => {
    if (linkTransitionHandler) linkTransitionHandler(data);
  };

  return (
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
      <LinkSettingModal
        isOpen={isOpen}
        closeModel={closeHandler}
        editLink={editHandler}
        deleteLink={deleteLinkHandler}
      />
    </ModalWrapper>
  );
};

export default Linker;
