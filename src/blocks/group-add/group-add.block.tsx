import { useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { toggleGroupWindowHandler } from "../../App/store/slices/action-window.slice";

import { useAddGroupMutation } from "../../App/store/api/groups";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import BlackWindowModal from "../../modals/black-window/black-window.modal";
import { GroupAddStyle, GroupButtons } from "./group-add.style";

const GroupAddBlock = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.actionWindow.isAddGroup);
  const activeTopicId = useAppSelector((state) => state.activeTopic.current.id);
  const user_id = useAppSelector((state) => state.user.session.user_id);

  const [addGroupApi, result] = useAddGroupMutation();

  const groupTitleRef = useRef<HTMLInputElement>(null);

  const closeGroupWindow = () => dispatch(toggleGroupWindowHandler());

  const addGroupHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    // Take values from inputs
    let title = groupTitleRef.current?.value!;
    // Check if they fields
    if (title.length < 2) return alert("pls field all");
    //Prepare object
    const group = {
      topic_id: activeTopicId,
      user_id,
      group_title: title,
    };
    // Close window
    closeGroupWindow();
    // Send data
    await addGroupApi(group);
  };

  return (
    <BlackWindowModal isOpen={isOpen}>
      <GroupAddStyle
        onSubmit={addGroupHandler}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Add new group</h1>
        <Input label="Group Title:" type="text" required ref={groupTitleRef} />
        <GroupButtons>
          <Button name="Cancel" type="button" actionHandle={closeGroupWindow} />
          <Button name="Add/send group" type="submit" />
        </GroupButtons>
      </GroupAddStyle>
    </BlackWindowModal>
  );
};

export default GroupAddBlock;
