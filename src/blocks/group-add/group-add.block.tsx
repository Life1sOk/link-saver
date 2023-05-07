import { useRef } from "react";

import { useAppSelector } from "../../App/store/hooks";

import { useAddGroupMutation } from "../../App/store/api/groups";

import { useGroupLocal } from "../../utils/hooks/useGroupLocal";
import { useRequestProcess } from "../../utils/hooks/useRequestProcess";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import BlackWindowModal from "../../modals/black-window/black-window.modal";
import {
  GroupAddStyle,
  LeftSide,
  GifBlock,
  GroupButtons,
  FormWrapper,
  TitleBlock,
} from "./group-add.style";

const GroupAddBlock = () => {
  const isOpen = useAppSelector((state) => state.groupsLocal.window.isAddGroup);
  const activeTopicId = useAppSelector(
    (state) => state.topicsLocal.window.activeTopic.id
  );
  const user_id = useAppSelector((state) => state.user.session.user_id);

  const { addOneGroupLocal, deleteGroupLocal, toggleGroupWindow } = useGroupLocal();

  const [addGroupApi, addGroupApiResult] = useAddGroupMutation();
  useRequestProcess(addGroupApiResult);

  const groupTitleRef = useRef<HTMLInputElement>(null);

  const closeGroupWindow = () => toggleGroupWindow();

  const addGroupHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    // Take values from inputs
    let title = groupTitleRef.current?.value!;
    // Check if they fields
    if (title.length < 2) return alert("pls field all");
    //Prepare object
    const group = {
      id: Date.now(),
      topic_id: activeTopicId,
      user_id,
      group_title: title,
      links: [],
    };
    // Close window
    closeGroupWindow();
    // Local add
    addOneGroupLocal(group);
    // Send data
    await addGroupApi(group)
      .unwrap()
      .catch((err) => {
        // Back changes
        if (err) {
          deleteGroupLocal(group.id);
        }
      });
  };

  return (
    <BlackWindowModal isOpen={isOpen}>
      <GroupAddStyle>
        <LeftSide>
          <TitleBlock>Add new group</TitleBlock>
          <FormWrapper onSubmit={addGroupHandler}>
            <Input label="Group Title:" type="text" required ref={groupTitleRef} />
            <GroupButtons>
              <Button name="Cancel" type="button" actionHandle={closeGroupWindow} />
              <Button name="Add group" type="submit" />
            </GroupButtons>
          </FormWrapper>
        </LeftSide>
        <GifBlock>
          <h3>Gif</h3>
        </GifBlock>
      </GroupAddStyle>
    </BlackWindowModal>
  );
};

export default GroupAddBlock;
