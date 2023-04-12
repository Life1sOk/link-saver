import { useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { toggleGroupWindowHandler } from "../../App/store/slices/action-window.slice";

import { useAddGroupMutation } from "../../App/store/api/groups";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import BlackWindowModal from "../../modals/black-window/black-window.modal";
import { GroupAddStyle, GroupWindow, GroupButtons } from "./group-add.style";

const GroupAddBlock = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.actionWindow.group);
  const activeTopicId = useAppSelector((state) => state.activeTopic.current.id);

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
      group_title: title,
    };
    // Send data
    addGroupApi(group);
    // Close window
    closeGroupWindow();
  };

  return (
    <BlackWindowModal isOpen={isOpen} actionHandler={closeGroupWindow}>
      <GroupAddStyle
        onSubmit={addGroupHandler}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Add new group</h1>
        <Input label="Group Title:" type="text" required ref={groupTitleRef} />
        <GroupWindow>Drop box</GroupWindow>
        <GroupButtons>
          <Button name="Add/send group" type="submit" />
        </GroupButtons>
      </GroupAddStyle>
    </BlackWindowModal>
  );
};

export default GroupAddBlock;
