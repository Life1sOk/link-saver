import { useRef } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useAddTopicByUserIdMutation } from "../../App/store/api/topics";

import { useTopicLocal } from "../../utils/hooks/useTopicLocal";
import { useRequestProcess } from "../../utils/hooks/useRequestProcess";

import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";

import BlackWindowModal from "../../modals/black-window/black-window.modal";
import {
  TopicAddStyle,
  LeftSide,
  GifBlock,
  TitleBlock,
  FormWrapper,
  TopicButtons,
} from "./topics-add.style";

const TopicsAddBlock = () => {
  const userId = useAppSelector((state) => state.user.session.user_id);
  const isOpen = useAppSelector((state) => state.topicsLocal.window.isAddTopic);

  const { addOneTopicLocal, toggleTopicWindow } = useTopicLocal();

  const [addTopicApi, addTopicApiResult] = useAddTopicByUserIdMutation();
  useRequestProcess(addTopicApiResult);

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

    // Local Add
    addOneTopicLocal({ id: Date.now(), user_id: userId, topic_title: checkField });

    // Send request
    await addTopicApi({ user_id: userId, topic_title: checkField });
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

export default TopicsAddBlock;
