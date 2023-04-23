import { useState, useEffect } from "react";
import { icons } from "../../utils/react-icons";

import { useAppDispatch } from "../../App/store/hooks";
import { activateLink } from "../../App/store/slices/action-window.slice";
import {
  deleteOneGeneric,
  updateOneStatusGeneric,
} from "../../App/store/slices/generics.slice";
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
  isActive: boolean;
  arrowActionHandler: (arg: number) => void;
}

const DotsLinkModal = ({
  data,
  children,
  isActive,
  arrowActionHandler,
}: IDotsModal) => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [deleteSnapshotApi, { isError, isLoading, isSuccess }] =
    useDeleteLinkSnapshotMutation();
  const [
    changeLinkStatus,
    { isError: isUpError, isLoading: isUpLoading, isSuccess: isUpSuccess },
  ] = useChangeLinkStatusMutation();

  const changeStatusHandler = async () => {
    if (data.status.toString() === "1") {
      const newStatus = {
        id: data.id,
        status: 0,
      };
      // Local changes
      dispatch(updateOneStatusGeneric(newStatus));
      // Server changes
      await changeLinkStatus(newStatus);
    }

    if (data.status.toString() === "0") {
      const newStatus = {
        id: data.id,
        status: 1,
      };
      // Local changes
      dispatch(updateOneStatusGeneric(newStatus));
      // Server changes
      await changeLinkStatus(newStatus);
    }
  };

  const openHandler = () => setIsOpen(true);
  const closeHandler = () => setIsOpen(false);

  const editHandler = () => {
    console.log(data);
    dispatch(activateLink(data));
    closeHandler();
  };

  const removeHandler = async () => {
    if (data.id) {
      // Close window
      closeHandler();
      // Local changes
      dispatch(deleteOneGeneric(data.id));
      // Server changes
      await deleteSnapshotApi({ id: data.id });
    }
  };

  const arrowAction = () => {
    if (arrowActionHandler) arrowActionHandler(data.id);
  };

  useEffect(() => {
    const processStatusHandler = (status: string) =>
      dispatch(processStatusHandlerStore(status));

    if (isLoading) processStatusHandler("isLoading");
    if (isSuccess) processStatusHandler("isSuccess");
    if (isError) processStatusHandler("isError");

    if (isUpLoading) processStatusHandler("isLoading");
    if (isUpSuccess) processStatusHandler("isSuccess");
    if (isUpError) processStatusHandler("isError");
  }, [
    isError,
    isLoading,
    isSuccess,
    isUpError,
    isUpLoading,
    isUpSuccess,
    dispatch,
  ]);

  return (
    <ModalWrapper>
      <FrontDesk isGroupActive={isActive} onClick={arrowAction} />
      <DotsLinkStyle isGroupActive={isActive}>
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
