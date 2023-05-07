import { useState, useRef, useEffect } from "react";

import { useAppSelector } from "../../App/store/hooks";

import { icons } from "../../utils/react-icons";

import { ITopic } from "../../interfaces/topic";

import { useTopicLocal } from "../../utils/hooks/useTopicLocal";
import { useRequestProcess } from "../../utils/hooks/useRequestProcess";

import {
  useChangeTopicTitleMutation,
  useDeleteTopicMutation,
} from "../../App/store/api/topics";

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

  const activeTopicId = useAppSelector(
    (state) => state.topicsLocal.window.activeTopic.id
  );
  // const isActive = activeTopicId === topic.id;
  const activateTopic = () => activeHandler(topic);

  // --------------- For change block ----------- //
  // changes State handlers
  const changeTitleHandler = () => setIsChange(true);
  const notReadyHandler = () => setIsChange(false);

  const { updateOneTopicLocal, deleteOneTopicLocal, resetTopicWindow } = useTopicLocal();

  // Server hook RTK
  const [changeTopicTitleApi, changeTopicTitleApiResult] = useChangeTopicTitleMutation();
  useRequestProcess(changeTopicTitleApiResult);
  // ref input
  const titleTopicRef = useRef<HTMLInputElement>(null);
  // Send request with checks
  const acceptChangesHandler = async () => {
    let changedTitle = titleTopicRef.current?.value!;

    if (changedTitle === topic.topic_title) return setIsChange(false);

    // Local
    setIsChange(false);
    updateOneTopicLocal({ index, title: changedTitle });
    activateTopic();

    // Server
    await changeTopicTitleApi({
      id: topic.id,
      topic_title: changedTitle,
    });
  };
  // ------------------------------------------------ //

  // --------------- For delete block ----------------- //
  // delete State handlers
  const deleteHandler = () => setIsDelete(true);
  const notDeleteHandler = () => setIsDelete(false);
  // Server hook RTK
  const [deleteTopicApi] = useDeleteTopicMutation();

  // Send request for delete
  const sureDeleteHandler = async () => {
    // Local
    resetTopicWindow();
    deleteOneTopicLocal(topic.id);
    setIsDelete(false);

    // // Server
    await deleteTopicApi({
      id: topic.id,
      user_id: topic.user_id,
    });
  };

  useEffect(() => {
    if (activeTopicId !== topic.id) notReadyHandler();
  }, [activeTopicId, topic.id]);

  return (
    <>
      <TopicStyle
        onClick={activateTopic}
        isActive={activeTopicId === topic.id}
        title={topic.topic_title}
      >
        <Icon>{icons.topicOpen}</Icon>
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
