import { useRef, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../App/store/hooks";
import { deactivateGroup } from "../../App/store/slices/action-window.slice";

import {
  useGetGroupsLinksByTitleQuery,
  useChangeGenericLinkGroupMutation,
} from "../../App/store/api/links";
import {
  useChangeGroupMutation,
  useDeleteGroupMutation,
} from "../../App/store/api/groups";

import Link from "../../components/link/link.component";
import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";

import AreYouSureModal from "../../modals/areYouSure/are-you-sure.modal";
import BlackWindowModal from "../../modals/black-window/black-window.modal";
import { GroupUpStyle, LinkWindow, ButtonsWrapper } from "./group-up.style";

const GroupUpBlock = () => {
  const dispatch = useAppDispatch();
  const [isSureModal, setIsSureModal] = useState(false);
  const activeGroup = useAppSelector((state) => state.actionWindow.activeGroup);

  const titleGroupRef = useRef<HTMLInputElement>(null);

  const [changeGroupLinkApi, result] = useChangeGenericLinkGroupMutation();
  const { data, error, isLoading } = useGetGroupsLinksByTitleQuery({
    user_id: 17,
    group_title: activeGroup.title,
  });
  const [changeGroupTitleApi] = useChangeGroupMutation();
  const [deleteGroupApi] = useDeleteGroupMutation();

  const deactivateGroupHandler = () => dispatch(deactivateGroup());

  const changeGroupLinkHandler = async (link_id: number) =>
    await changeGroupLinkApi({ id: link_id, group_title: null });

  const doneChangeHandler = async () => {
    let currentTitle = titleGroupRef.current?.value!;
    // Check title changes
    if (currentTitle === activeGroup.title) {
      return deactivateGroupHandler();
    }
    // Send changes
    await changeGroupTitleApi({
      id: activeGroup.id,
      user_id: 17,
      new_title: currentTitle,
      old_title: activeGroup.title,
    });

    return deactivateGroupHandler();
  };

  const modalActionHandler = () => setIsSureModal(!isSureModal);
  const sureDeleteHandler = async () => {
    await deleteGroupApi({
      id: activeGroup.id,
      user_id: 17,
      group_title: activeGroup.title,
    });

    setIsSureModal(!isSureModal);
    return deactivateGroupHandler();
  };

  return (
    <BlackWindowModal isOpen={activeGroup.isActive}>
      <GroupUpStyle onClick={(e) => e.stopPropagation()}>
        <AreYouSureModal
          isActive={isSureModal}
          actionSureHandler={sureDeleteHandler}
          actionToggleHandler={modalActionHandler}
          message="All your links in this group will be also deleted! Are you sure?"
        />
        <Input
          label="Title:"
          type="text"
          defaultValue={activeGroup.title}
          ref={titleGroupRef}
        />
        <LinkWindow>
          {data?.map((link) => (
            <Link
              data={link}
              key={link.id}
              type="transferGeneric"
              arrowActionHandler={changeGroupLinkHandler}
            />
          ))}
        </LinkWindow>
        <ButtonsWrapper>
          <Button name="Cancel" actionHandle={deactivateGroupHandler} />
          <Button name="Delete" actionHandle={modalActionHandler} />
          <Button name="Done" actionHandle={doneChangeHandler} />
        </ButtonsWrapper>
      </GroupUpStyle>
    </BlackWindowModal>
  );
};

export default GroupUpBlock;
