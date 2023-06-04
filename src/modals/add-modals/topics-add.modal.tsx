import { useRef } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useTopicLocal } from "../../utils/helper-dispatch/useTopicLocal";
import { useTopicLogic } from "../../utils/contollers/useTopicLogic";

import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";
import Mark from "../../shared/mark/mark.shared";

import BlackWindowModal from "../../shared/black-window/black-window.modal";
import {
  AddModalStyle,
  TitleBlock,
  FormWrapper,
  ButtonsWrapper,
  ModalHeader,
} from "./add-modals.style";

const TopicsAddModal = () => {
  const userId = useAppSelector((state) => state.user.session.user_id);
  const isOpen = useAppSelector((state) => state.topicsLocal.window.isAddTopic);

  const { toggleTopicWindow } = useTopicLocal();

  const { addTopic } = useTopicLogic();

  const titleRef = useRef<HTMLInputElement>(null);

  // Toggle functions
  const closeTopicWindow = () => toggleTopicWindow();

  // Server Request
  const addTopicHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    // Input ref
    let checkField = titleRef.current?.value!;

    // Check field
    if (checkField.length < 3) {
      return alert("title should have more than 2 characters");
    }
    // // Close window
    closeTopicWindow();

    let newTopic = { id: Date.now(), user_id: userId, topic_title: checkField };
    // Add topic
    await addTopic(newTopic, userId);

    // Reset inputs
    if (titleRef.current) titleRef.current.value = "";
  };

  return (
    <BlackWindowModal isOpen={isOpen}>
      <AddModalStyle>
        <ModalHeader>
          <TitleBlock>Add topic</TitleBlock>
          <Mark sectionType="topic" />
        </ModalHeader>
        <FormWrapper method="dialog" onSubmit={addTopicHandler}>
          <Input label="Title" type="text" required ref={titleRef} />
          <ButtonsWrapper>
            <Button name="Cancel" type="button" actionHandle={closeTopicWindow} />
            <Button name="Add topic" type="submit" />
          </ButtonsWrapper>
        </FormWrapper>
      </AddModalStyle>
    </BlackWindowModal>
  );
};

export default TopicsAddModal;
