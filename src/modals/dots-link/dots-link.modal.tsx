import { useState } from "react";
import { icons } from "../../utils/react-icons";

import { useAppDispatch } from "../../App/store/hooks";
import { activateLink } from "../../App/store/slices/action-window.slice";

import { IShortLink } from "../../interfaces/link";

import { useDeleteLinkSnapshotMutation } from "../../App/store/api/links";

import {
  DotsLinkStyle,
  IconWrapper,
  OpenWindow,
  ActionP,
  DialogBack,
} from "./dots-link.style";

interface IDotsModal {
  data: IShortLink;
  isActive?: boolean;
  children: string | JSX.Element | JSX.Element[];
}

const DotsLinkModal = ({ data, isActive, children }: IDotsModal) => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [deleteSnapshotApi, result] = useDeleteLinkSnapshotMutation();

  const openHandler = () => setIsOpen(true);
  const closeHandler = () => setIsOpen(false);

  const editHandler = () => {
    dispatch(activateLink(data));
    closeHandler();
  };

  const removeHandler = async () => {
    if (data.id) {
      await deleteSnapshotApi({ id: data.id });
      closeHandler();
    }
  };

  return (
    <>
      <DotsLinkStyle>
        {children}
        {isActive && (
          <IconWrapper onClick={openHandler}>{icons.dots}</IconWrapper>
        )}
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
    </>
  );
};

export default DotsLinkModal;
