import { useState, useRef, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../App/store/hooks";
import { useAddTopicByUserIdMutation } from "../../App/store/api/topics";
import { addOneTopic } from "../../App/store/slices/topics.slice";
import { processStatusHandlerStore } from "../../App/store/slices/process.slice";

import Button from "../../components/button/button.component";
import ButtonNew from "../../components/button-new/button-new.component";
import TopicAdd from "../../components/topic-add/topic-add.component";

import { TopicsAddStyle } from "./topics-add.style";

const TopicsAddBlock = () => {
  const dispatch = useAppDispatch();

  const [isAddTopic, setIsAddTopic] = useState(false);
  const userId = useAppSelector((state) => state.user.session.user_id);

  const [addTopic, { isError, isLoading, isSuccess }] =
    useAddTopicByUserIdMutation();

  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle functions
  const openTopic = () => setIsAddTopic(true);
  const closeTopic = () => setIsAddTopic(false);

  // Server Request
  const sendChanges = async () => {
    // Input ref
    let checkField = inputRef.current?.value!;

    // Check field
    if (checkField.length < 3) {
      return alert("title should have more than 2 characters");
    }
    // Close window
    closeTopic();

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
    <TopicsAddStyle>
      <ButtonNew
        name="Add topic"
        actionHandle={openTopic}
        color="rgb(247, 184, 79)"
      />
      {/* {isAddTopic ? (
        <TopicAdd
          acceptHandler={sendChanges}
          closeHandler={closeTopic}
          ref={inputRef}
        />
      ) : null} */}
    </TopicsAddStyle>
  );
};

export default TopicsAddBlock;
