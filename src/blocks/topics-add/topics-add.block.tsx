import { useState, useRef } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useAddTopicByUserIdMutation } from "../../App/store/api/topics";

import Button from "../../components/button/button.component";
import TopicAdd from "../../components/topic-add/topic-add.component";

import { TopicsAddStyle } from "./topics-add.style";

const TopicsAddBlock = () => {
  const [isAddTopic, setIsAddTopic] = useState(false);
  const userId = useAppSelector((state) => state.user.session.user_id);

  const [addTopic, result] = useAddTopicByUserIdMutation();

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

    // Send request
    await addTopic({ user_id: userId, topic_title: checkField });
  };

  console.log(userId);

  return (
    <TopicsAddStyle>
      <Button name="Add new topic" actionHandle={openTopic} />
      {isAddTopic ? (
        <TopicAdd
          acceptHandler={sendChanges}
          closeHandler={closeTopic}
          ref={inputRef}
        />
      ) : null}
    </TopicsAddStyle>
  );
};

export default TopicsAddBlock;
