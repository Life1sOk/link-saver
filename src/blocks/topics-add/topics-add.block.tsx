import { useRef, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../App/store/hooks";
import { useAddTopicByUserIdMutation } from "../../App/store/api/topics";
import { addOneTopic } from "../../App/store/slices/topics.slice";
import { processStatusHandlerStore } from "../../App/store/slices/process.slice";
import { toggleTopicWindowHandler } from "../../App/store/slices/action-window.slice";

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
  const dispatch = useAppDispatch();

  const userId = useAppSelector((state) => state.user.session.user_id);
  const isOpen = useAppSelector((state) => state.actionWindow.isAddTopic);

  const [addTopic, { isError, isLoading, isSuccess }] =
    useAddTopicByUserIdMutation();

  const titleRef = useRef<HTMLInputElement>(null);

  // Toggle functions
  const closeTopicWindow = () => dispatch(toggleTopicWindowHandler());

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
    dispatch(
      addOneTopic({ id: Date.now(), user_id: userId, topic_title: checkField })
    );

    // Send request
    await addTopic({ user_id: userId, topic_title: checkField });
  };

  useEffect(() => {
    const processStatusHandler = (status: string) =>
      dispatch(processStatusHandlerStore(status));

    if (isLoading) processStatusHandler("isLoading");
    if (isSuccess) processStatusHandler("isSuccess");
    if (isError) processStatusHandler("isError");
  }, [isError, isLoading, isSuccess, dispatch]);

  return (
    <BlackWindowModal isOpen={isOpen}>
      <TopicAddStyle>
        <LeftSide>
          <TitleBlock>Add new topic</TitleBlock>
          <FormWrapper onSubmit={addTopicHandler}>
            <Input label="Title" type="text" required ref={titleRef} />
            <TopicButtons>
              <Button
                name="Cancel"
                type="button"
                actionHandle={closeTopicWindow}
              />
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
