import { useState, useRef, useEffect } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useTopicLogic } from "../../utils/contollers/useTopicLogic";
import { useTopicLocal } from "../../utils/helper-dispatch/useTopicLocal";

import { icons } from "../../utils/react-icons";
import TopicIcon from "./topic-icon/topic-icon.component";
import FrontBlocker from "../../shared/front-blocker/front-blocker.shared";
import { ITopic } from "../../utils/interfaces/topic";

import AreYouSureModal from "../../modals/areYouSure/are-you-sure.modal";
import { TopicStyle, Title, TitleEditor, IconWrapper, Icon, XMark } from "./topic.style";

interface ITopicActive {
  topic: ITopic;
  activeHandler: (arg: ITopic) => void;
  index: number;
}

const Topic = ({ topic, activeHandler, index }: ITopicActive) => {
  const [isChange, setIsChange] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const userId = useAppSelector((state) => state.user.session.user_id);
  const activeTopicId = useAppSelector(
    (state) => state.topicsLocal.window.activeTopic.id
  );
  const currentCount = useAppSelector(
    (state) => state.topicsLocal.count[`${topic.topic_title}`]
  );

  // Helpers
  const activateTopic = () => activeHandler(topic);

  const changeTitleHandler = () => setIsChange(true);
  const notReadyHandler = () => setIsChange(false);
  const deleteHandler = () => setIsDelete(true);
  const notDeleteHandler = () => setIsDelete(false);

  // Hooks
  const { resetTopicWindow } = useTopicLocal();
  const { updateTitleTopic, deleteTopic, getGroupCount } = useTopicLogic();

  // --------------- For change block ----------- //
  const titleTopicRef = useRef<HTMLInputElement>(null);
  // Send request with checks
  const acceptChangesHandler = async () => {
    let changedTitle = titleTopicRef.current?.value!;

    if (changedTitle === topic.topic_title) return setIsChange(false);
    // Local
    setIsChange(false);
    activateTopic();
    // Update topic
    await updateTitleTopic(index, changedTitle, topic);
  };

  // --------------- For delete block ----------------- //
  const sureDeleteHandler = async () => {
    // Local
    resetTopicWindow();
    setIsDelete(false);
    // Delete
    await deleteTopic(topic, userId, currentCount);
  };

  useEffect(() => {
    if (activeTopicId !== topic.id) notReadyHandler();
  }, [activeTopicId, topic.id]);

  useEffect(() => {
    if (topic.id > 1683451657031) return;
    getGroupCount(topic, userId);
  }, []);

  return (
    <>
      <TopicStyle
        onClick={activateTopic}
        isActive={activeTopicId === topic.id}
        title={topic.topic_title}
      >
        <FrontBlocker isBlocked={topic.id > 1683451657031} />
        <TopicIcon count={currentCount} />
        {!isChange ? (
          <Title>{topic.topic_title}</Title>
        ) : (
          <TitleEditor
            type="text"
            defaultValue={topic.topic_title}
            ref={titleTopicRef}
            autoFocus
          />
        )}
        {activeTopicId === topic.id && (
          <IconWrapper>
            {isChange ? (
              <>
                <Icon onClick={acceptChangesHandler}>{icons.check}</Icon>
                <Icon onClick={notReadyHandler}>
                  <XMark />
                </Icon>
              </>
            ) : (
              <>
                <Icon onClick={changeTitleHandler}>{icons.pen}</Icon>
                <Icon onClick={deleteHandler}>{icons.delete}</Icon>
              </>
            )}
          </IconWrapper>
        )}
      </TopicStyle>
      <AreYouSureModal
        isActive={isDelete}
        actionSureHandler={sureDeleteHandler}
        actionToggleHandler={notDeleteHandler}
        message="All your groups and links in this topic will be destroyed! Are you sure?"
      />
    </>
  );
};

export default Topic;
