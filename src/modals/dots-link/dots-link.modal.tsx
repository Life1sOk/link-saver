import { useState, useEffect } from "react";
import { icons } from "../../utils/react-icons";

import { useAppDispatch } from "../../App/store/hooks";
import { activateLink } from "../../App/store/slices/action-window.slice";
import { updateOneStatusGeneric } from "../../App/store/slices/generics.slice";
import { updateGroupLinkStatus } from "../../App/store/slices/groups.slice";
import { processStatusHandlerStore } from "../../App/store/slices/process.slice";

import { IShortLink } from "../../interfaces/link";

import {
  useDeleteLinkSnapshotMutation,
  useChangeLinkStatusMutation,
} from "../../App/store/api/links";

import {
  ModalWrapper,
  FrontDesk,
  DotsLinkStyle,
  IconWrapper,
  OpenWindow,
  ActionP,
  DialogBack,
} from "./dots-link.style";

interface IDotsModal {
  data: IShortLink;
  children: string | JSX.Element | JSX.Element[];
  position: string;
  isActive: boolean;
  arrowActionHandler: (arg: IShortLink) => void;
  deleteLinkLocal: (link_id: number) => void;
}

const DotsLinkModal = ({
  data,
  children,
  isActive,
  position,
  arrowActionHandler,
  deleteLinkLocal,
}: IDotsModal) => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const [deleteSnapshotApi] = useDeleteLinkSnapshotMutation();
  const [changeLinkStatus, { isError, isLoading, isSuccess }] =
    useChangeLinkStatusMutation();

  const changeStatusHandler = async () => {
    if (data.status.toString() === "1") {
      const newStatus = {
        id: data.id,
        status: 0,
      };
      // Local changes
      if (position === "generics") {
        dispatch(updateOneStatusGeneric(newStatus));
      } else {
        dispatch(
          updateGroupLinkStatus({
            link_data: newStatus,
            index: Number(position),
          })
        );
      }
      // Server changes
      await changeLinkStatus(newStatus);
    }

    if (data.status.toString() === "0") {
      const newStatus = {
        id: data.id,
        status: 1,
      };
      // Local changes
      if (position === "generics") {
        dispatch(updateOneStatusGeneric(newStatus));
      } else {
        dispatch(
          updateGroupLinkStatus({
            link_data: newStatus,
            index: Number(position),
          })
        );
      }
      // Server changes
      await changeLinkStatus(newStatus);
    }
  };

  const openHandler = () => setIsOpen(true);
  const closeHandler = () => setIsOpen(false);

  const editHandler = () => {
    dispatch(activateLink({ data, from: position }));
    closeHandler();
  };

  const removeHandler = async () => {
    if (data.id) {
      // Close window
      closeHandler();
      // Local changes
      deleteLinkLocal(data.id);
      // Server changes
      await deleteSnapshotApi({ id: data.id });
    }
  };

  const arrowAction = () => {
    if (arrowActionHandler) arrowActionHandler(data);
  };

  useEffect(() => {
    const processStatusHandler = (status: string) =>
      dispatch(processStatusHandlerStore(status));

    if (isLoading) processStatusHandler("isLoading");
    if (isSuccess) processStatusHandler("isSuccess");
    if (isError) processStatusHandler("isError");
  }, [isError, isLoading, isSuccess, dispatch]);

  return (
    <ModalWrapper>
      <FrontDesk isGroupActive={isActive} onClick={arrowAction} />
      <DotsLinkStyle>
        <IconWrapper status={Number(data.status)} onClick={changeStatusHandler}>
          {icons.link}
        </IconWrapper>
        {children}
        <IconWrapper onClick={openHandler}>{icons.dots}</IconWrapper>
        {isOpen && (
          <>
            <DialogBack onClick={closeHandler} isOpen={isOpen} />
            <OpenWindow>
              <ActionP onClick={editHandler}>Edit Some</ActionP>
              <ActionP onClick={removeHandler}>Remove</ActionP>
            </OpenWindow>
          </>
        )}
      </DotsLinkStyle>
    </ModalWrapper>
  );
};

export default DotsLinkModal;
