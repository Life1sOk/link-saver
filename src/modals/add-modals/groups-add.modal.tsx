import { useRef } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useGroupLocal } from "../../utils/helper-dispatch/useGroupLocal";
import { useGroupsLogic } from "../../utils/contollers/useGroupsLogic";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";
import Mark from "../../shared/mark/mark.shared";

import BlackWindowModal from "../../shared/black-window/black-window.modal";
import {
  AddModalStyle,
  ButtonsWrapper,
  FormWrapper,
  TitleBlock,
  ModalHeader,
} from "./add-modals.style";

const GroupAddModal = () => {
  const user_id = useAppSelector((state) => state.user.session.user_id);
  const isOpen = useAppSelector((state) => state.groupsLocal.window.isAddGroup);
  const activeTopic = useAppSelector((state) => state.topicsLocal.window.activeTopic);

  const { toggleGroupWindow } = useGroupLocal();
  const { addGroup } = useGroupsLogic();

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
      topic_id: activeTopic.id,
      user_id,
      group_title: title,
      links: [],
    };
    // Close active modal
    closeGroupWindow();
    // Add group
    await addGroup(group, activeTopic.topic_title);

    // Reset input
    if (groupTitleRef.current) groupTitleRef.current.value = "";
  };

  return (
    <BlackWindowModal isOpen={isOpen}>
      <AddModalStyle>
        <ModalHeader>
          <TitleBlock>Add group</TitleBlock>
          <Mark sectionType="group" />
        </ModalHeader>
        <FormWrapper onSubmit={addGroupHandler}>
          <Input label="Group Title:" type="text" required ref={groupTitleRef} />
          <ButtonsWrapper>
            <Button name="Cancel" type="button" actionHandle={closeGroupWindow} />
            <Button name="Add group" type="submit" />
          </ButtonsWrapper>
        </FormWrapper>
      </AddModalStyle>
    </BlackWindowModal>
  );
};

export default GroupAddModal;
