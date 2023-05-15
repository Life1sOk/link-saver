import { useRef } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useTopicLocal } from "../../utils/helper-dispatch/useTopicLocal";
import { useTopicLogic } from "../../utils/contollers/useTopicLogic";

import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";

import BlackWindowModal from "../../shared/black-window/black-window.modal";
import {
  TopicAddStyle,
  LeftSide,
  GifBlock,
  TitleBlock,
  FormWrapper,
  TopicButtons,
} from "./topics-add.style";

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
    // Close window
    closeTopicWindow();

    let newTopic = { id: Date.now(), user_id: userId, topic_title: checkField };
    // Add topic
    await addTopic(newTopic, userId);
  };

  return (
    <BlackWindowModal isOpen={isOpen}>
      <TopicAddStyle>
        <LeftSide>
          <TitleBlock>Add new topic</TitleBlock>
          <FormWrapper onSubmit={addTopicHandler}>
            <Input label="Title" type="text" required ref={titleRef} />
            <TopicButtons>
              <Button name="Cancel" type="button" actionHandle={closeTopicWindow} />
              <Button name="Add topic" type="submit" />
            </TopicButtons>
          </FormWrapper>
        </LeftSide>
        <GifBlock>
          <h3>Gif</h3>
        </GifBlock>
      </TopicAddStyle>
    </BlackWindowModal>
  );
};

export default TopicsAddModal;
