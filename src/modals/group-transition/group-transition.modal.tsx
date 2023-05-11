import { useState } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useFilterById } from "../../utils/helpers/useFilterById";

import { ITopic } from "../../utils/interfaces/topic";

// Thaths from others modals - need to be fixed;
import { DialogBack } from "../other-action/other-action.style";

import {
  GroupTransitionModalStyle,
  Wrapper,
  ChildWrapper,
  TransTitle,
  TransMain,
  Emptiness,
  TopicsPick,
} from "./group-transition.style";

interface ITransMod {
  action: (topic: ITopic) => void;
  children?: string | JSX.Element | JSX.Element[];
}

const GroupTransitionModal = ({ action, children }: ITransMod) => {
  const [isOpen, setIsOpen] = useState(false);

  const topics = useAppSelector((state) => state.topicsLocal.data);
  const activeTopicId = useAppSelector(
    (state) => state.topicsLocal.window.activeTopic.id
  );

  const mainTopic = {
    id: 0,
    topic_title: "Main",
  };

  // helpers
  const toggleModalHandler = () => setIsOpen(!isOpen);
  const closeModalHandler = () => setIsOpen(false);

  // action
  const actionHandler = (topic: ITopic) => {
    action(topic);
    closeModalHandler();
  };

  const filteredTopics = useFilterById([mainTopic, ...topics], activeTopicId);

  return (
    <Wrapper>
      {isOpen && (
        <>
          <DialogBack onClick={closeModalHandler} isOpen={isOpen} />
          <GroupTransitionModalStyle>
            <TransTitle>Topics:</TransTitle>
            <TransMain>
              {filteredTopics.length < 1 ? (
                <Emptiness>empty</Emptiness>
              ) : (
                filteredTopics.map((topic) => (
                  <TopicsPick
                    key={topic.id}
                    title={topic.topic_title}
                    onClick={() => actionHandler(topic)}
                  >
                    {topic.topic_title}
                  </TopicsPick>
                ))
              )}
            </TransMain>
          </GroupTransitionModalStyle>
        </>
      )}
      <ChildWrapper onClick={toggleModalHandler}>{children}</ChildWrapper>
    </Wrapper>
  );
};

export default GroupTransitionModal;
